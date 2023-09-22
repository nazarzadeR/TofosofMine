import http from '@/lib/http'
import { AxiosResponse } from 'axios'

// Util Api function

export async function loginEndpoint(credentials: AppMeta.TSign) {
    return http.post('auth/login', credentials)
}

export async function registerEndpoint(credentials: AppMeta.TSign) {
    return http.post('auth/register', credentials)
}

export async function refreshEndpoint(token: string) {
    let response: AxiosResponse

    try {
        response = await http.post('/auth/refresh', { token })

        return response.data.access_token
    } catch (e) {
        return null
    }
}

export async function getUserMetaFromTokenEndpoint(token: string) {
    http.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const response = await http.get('/user')

    return response.data
}

export async function logoutEndpoint(token: string) {
    let response: AxiosResponse

    try {
        response = await http.post('/auth/logout', { token })

        return response.data
    } catch (e) {
        return null
    }
}
