import { useState } from 'react'

import useApiQuery from '@/hooks/useApiQuery'

const SECOND = 1000
const TEN_SECOND = SECOND * 10
const TWO_SECOND = 2 * SECOND
const SECONDS_IN_MINUTE = 60 * SECOND

const useUp = (options: object = {}) => {
    const [up, setUp] = useState(false)

    useApiQuery(
        {
            key: 'up',
            route: '/',
        },
        {
            retry: 4,
            refetchOnWindowFocus: true,
            refetchInterval: SECONDS_IN_MINUTE,
            refetchIntervalInBackground: true,
            onError: () => setUp(false),
            onSuccess: (response) => setUp(!!response?.data?.up),
            retryDelay: (attemptIndex) =>
                Math.min(TWO_SECOND * attemptIndex, TEN_SECOND),
            ...options,
        }
    )

    return up
}

export default useUp
