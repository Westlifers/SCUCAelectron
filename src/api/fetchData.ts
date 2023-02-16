import request from "@/api/index";
import {
    DetailedCompetition,
    OmittedCompetition,
    OmittedResultAvg,
    OmittedResultBest,
    RankPaginationData,
    Record,
    Result
} from "@/types";

export async function getComp (compId: string): Promise<DetailedCompetition> {
    let res
    // 当comp为'week'，查询当前周赛；为'special'，查询当前正赛；为其它，查询compId对应的比赛
    switch (compId) {
        case 'week':
            res = await request({
                url: '/competition/week/ongoing/',
                method: 'get',
            })
            break
        case 'special':
            res = await request({
                url: '/competition/special/ongoing/',
                method: 'get',
            })
            break
        default:
            res = await request({
                url: `/competition/detail/${compId}/`,
                method: 'get',
            })
    }

    const result_set: Result[] = []
    if (res['result_set'].length > 0) {
        for (const result_req of res['result_set']) {
            const result: Result = {
                username: result_req['user'],
                event: result_req['event'],
                time_1: result_req['time_1'],
                time_2: result_req['time_2'],
                time_3: result_req['time_3'],
                time_4: result_req['time_4'],
                time_5: result_req['time_5'],
                avg: result_req['avg'],
                best: result_req['best']
            }
            result_set.push(result)
        }
    }
    const comp: DetailedCompetition = {
        compId: res['compId'],
        is_normal: res['is_normal'],
        ongoing: res['ongoing'],
        user_count: res['user_count'],
        event_count: res['event_count'],
        result_set: result_set
    }
    return comp
}


export async function getScuRecord (): Promise<Record> {
    const res = await request({
        url: '/scur/',
        method: 'get',
    })

    const record: Record = {
        avg: [],
        best: []
    }

    for (const result of res['avg']) {
        const result_: OmittedResultAvg = {
            avg: result['avg'],
            username: result['username'],
            event: result['event']
        }
        record.avg.push(result_)
    }

    for (const result of res['best']) {
        const result_: OmittedResultBest = {
            best: result['best'],
            username: result['username'],
            event: result['event']
        }
        record.best.push(result_)
    }

    return record
}


export async function getCompetitionList (): Promise<OmittedCompetition[]>  {
    const res = await request({
        url: '/competition/',
        method: 'get'
    })
    const compList: OmittedCompetition[] = []

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    for (const comp of res) {
        compList.push({
            compId: comp['compId'],
            ongoing: comp['ongoing'],
            is_normal: comp['is_normal'],
            event_count: comp['event_count'],
            user_count: comp['user_count'],
        })
    }

    return compList
}


export async function getRank (event: string, aorb: string, page: number): Promise<RankPaginationData> {
    const res = await request({
        url: `/rank/${event}/${aorb}/?page=${page}`,
        method: 'get'
    })

    const rankPaginationData: RankPaginationData = {
        count: res['count'],
        current: res['current'],
        results: res['results']
    }

    return rankPaginationData
}
