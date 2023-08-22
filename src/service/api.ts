import http from '@/lib/http'
import { AxiosResponse } from 'axios'

// Util Api function

export async function login(credentials: AppMeta.TSign) {
    return http.post('auth/login', credentials)
}

export async function register(credentials: AppMeta.TSign) {
    return http.post('auth/register', credentials)
}

export async function refresh(token: string) {
    let response: AxiosResponse

    try {
        response = await http.post('/auth/refresh', { token })

        return response.data.access_token
    } catch (e) {
        return null
    }
}

export async function getUserMetaFromToken(token: string) {
    http.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const response = await http.get('/user')

    return response.data
}

export async function logout(token: string) {
    let response: AxiosResponse

    try {
        response = await http.post('/auth/logout', { token })

        return response.data
    } catch (e) {
        return null
    }
}
