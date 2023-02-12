import request from "@/api/index";
import {DetailedCompetition, OmittedResultAvg, OmittedResultBest, Record, Result} from "@/types";

export async function getCurrentWeekComp (): Promise<DetailedCompetition> {
    const res = await request({
        url: '/competition/week/ongoing/',
        method: 'get',
    })
    const result_set: Result[] = []
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
    const comp: DetailedCompetition = {
        compId: res['compId'],
        is_normal: res['is_normal'],
        ongoing: res['ongoing'],
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
