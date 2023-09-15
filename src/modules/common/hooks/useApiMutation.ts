import { AxiosResponse, Method } from 'axios'
import { useTranslation } from 'react-i18next'
import { MutationFunction, useMutation, UseMutationOptions } from 'react-query'

import useHttp from './useHttp'
import useToast from './useToast'

type TApiMutationFunc<T> =
    | {
          type: Method
          route: string
      }
    | {
          fn: (params: T) => any
      }

type TApiMutationOptions<T> = UseMutationOptions<
    AxiosResponse,
    unknown,
    T,
    MutationFunction<AxiosResponse>
>

const useApiMutation = <T = Record<string, any>>(
    query: TApiMutationFunc<T>,
    options: TApiMutationOptions<T> = {}
) => {
    const http = useHttp()
    const toast = useToast()
    const { t } = useTranslation()

    const isFunctionType = (
        query: TApiMutationFunc<T>
    ): query is { fn: (params: T) => any } => {
        return 'fn' in query
    }

    const queryFn = isFunctionType(query)
        ? query.fn
        : async (params: T) => {
              let response
              try {
                  response = await http.request({
                      method: query.type,
                      url: query.route,
                      data: params,
                  })

                  return response
              } catch (error) {
                  toast.error(t('errors.SOMETHING_GONE_WRONG'))
                  return error
              }
          }

    return useMutation(queryFn, {
        ...options,
        // * For Errors onerror not fired
        onSettled(res) {
            if (res && res.data?.errorCode) {
                const errorName = `errors.${res.data.errorCode}`
                const translateStr = t(`errors.${res.data.errorCode}`)

                if (errorName === translateStr) {
                    toast.error(t('errors.SOMETHING_GONE_WRONG'))
                    return
                }

                toast.error(t(errorName))
            }
        },
    })
}

export default useApiMutation
