import { AxiosResponse, Method } from 'axios'
import { useTranslation } from 'react-i18next'
import { useQuery, UseQueryOptions } from 'react-query'

import { useHttp, useToast } from '@modules/common'

type TApiQueryFunc = {
    type?: Method
    route: string
    key: string
}

type TApiQueryOptions<T> = UseQueryOptions<AxiosResponse<T>>

const useApiQuery = <T = Record<string, any>>(
    query: TApiQueryFunc,
    options: TApiQueryOptions<T> = {}
) => {
    const http = useHttp()
    const toast = useToast()
    const { t } = useTranslation()

    const queryFn = async () => {
        try {
            const response = await http.request({
                method: query?.type || 'get',
                url: query.route,
            })

            return response
        } catch (error) {
            toast.error(t('errors.SOMETHING_GONE_WRONG'))
            throw error
        }
    }

    return useQuery<AxiosResponse<T>>(query.key, queryFn, options)
}

export default useApiQuery
