import { useEffect } from 'react'
import { InternalAxiosRequestConfig } from 'axios'

import http from '@/lib/http'
import useAuth from '@/store/auth'
import { refresh } from '@/service/api'
import useRefreshToken from '@/store/refresh-token'

const useHttp = () => {
    const { access_token } = useAuth()
    const { token, getToken } = useRefreshToken()

    useEffect(() => {
        const passTokenToRequestInterceptor = http.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                if (!config.headers.Authorization) {
                    config.headers.Authorization = `Bearer ${access_token}`
                }

                return config
            },
            (error) => Promise.reject(error)
        )

        const handleUnauthorizedResponsesInterceptor =
            http.interceptors.response.use(
                (response) => response,
                async (error) => {
                    const prevRequest = error?.config

                    if (
                        error.response.status === 401 &&
                        !prevRequest?.sent &&
                        !!token
                    ) {
                        prevRequest.sent = true

                        const new_access_token = await refresh(getToken())

                        prevRequest.headers.Authorization = `Bearer ${new_access_token}`
                    }
                }
            )

        return () => {
            http.interceptors.request.eject(passTokenToRequestInterceptor)
            http.interceptors.response.eject(
                handleUnauthorizedResponsesInterceptor
            )
        }
    }, [access_token])

    return http
}

export default useHttp
