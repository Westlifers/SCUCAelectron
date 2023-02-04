import request from "@/api/index";

export async function login(data: any) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'get'
    })
}


export function register(data: any) {
    return request({
        url: '/user/',
        method: 'post',
        data
    })
}
