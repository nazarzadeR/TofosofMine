import React, { useEffect } from 'react'

import { useAuthStore } from '../store'
import { PageLoader } from '@modules/common'

const PersistLoader = () => {
    const { persist } = useAuthStore()

    useEffect(() => {
        persist()
    }, [])

    return <PageLoader />
}

export default PersistLoader
