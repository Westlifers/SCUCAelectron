import request from "@/api/index";
import {DetailedCompetition, Result} from "@/types";

export async function getCurrentWeekComp () {
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
