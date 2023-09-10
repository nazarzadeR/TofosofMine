import React, { useEffect, useState } from 'react'

import { getSearchParamsFromUrl } from '@/util'
import useApiMutation from '@/hooks/useApiMutation'

const useGithubAuth = () => {
    const code = getSearchParamsFromUrl('code') 
    const [hasCode, setHasCode] = useState(true)
    const githubLoginMutation = useApiMutation({
        type: "post",
        route: `/auth/github/${code}`,
    })

    useEffect(() => {
        if (code) {
            githubLoginMutation.mutateAsync({}, {
                onSuccess: (data) => {
                    console.log(data)
                }
            })
        } else setHasCode(false)
    }, [])

    return hasCode
}

export default useGithubAuth
