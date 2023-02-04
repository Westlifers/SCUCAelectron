export interface User {
    id: number,
    username: string,
    email: string,
    is_active: boolean,
    is_superuser?: boolean,
}
