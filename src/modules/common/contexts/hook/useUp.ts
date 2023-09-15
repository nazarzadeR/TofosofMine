import { useState } from 'react'

import { useApiQuery } from '@modules/common'

const SECOND = 1000
const TWO_SECOND = 2 * SECOND
const TEN_SECOND = 10 * SECOND
const SECONDS_IN_MINUTE = 60 * SECOND
const FIVE_MINUTE = 5 * SECONDS_IN_MINUTE

const useUp = (options: Record<string, unknown> = {}) => {
    const [up, setUp] = useState(false)

    useApiQuery(
        {
            key: 'up',
            route: '/',
        },
        {
            retry: 4,
            staleTime: FIVE_MINUTE,
            refetchOnWindowFocus: true,
            refetchInterval: FIVE_MINUTE,
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
