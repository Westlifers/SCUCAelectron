export interface User {
    id: number,
    username: string,
    email: string,
    is_active: boolean,
    is_superuser?: boolean,
}

export interface Result {
    username: string,
    event: string,
    time_1: number,
    time_2: number,
    time_3: number,
    time_4: number,
    time_5: number,
    avg: number,
    best: number
}


export interface OmittedCompetition {
    compId: string,
    is_normal: boolean,
    ongoing: boolean,
}


export interface DetailedCompetition extends OmittedCompetition{
    result_set: Result[],
}


interface OmittedResult {
    event: string
    username: string
}


export interface OmittedResultAvg extends OmittedResult {
    avg: number
}


export interface OmittedResultBest extends OmittedResult {
    best: number
}


export interface Record {
    avg: OmittedResultAvg[]
    best: OmittedResultBest[]
}
