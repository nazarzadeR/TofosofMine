import React, { lazy } from 'react'

import Sign from './Sign'
import { Header } from './layout'
import useGithubAuth from './hooks/useGithubAuth'
import { PageLoader, SuspenseLoader, useGlobals } from '@modules/common'

const SignAnimation = lazy(() => import('./components/SignAnimation'))

const SignPage = () => {
    const hasCode = useGithubAuth()
    const { screenSize } = useGlobals()

    if (hasCode) return <PageLoader />

    return (
        <div className='wrapper flex flex-col'>
            <Header />
            <div className='wrapper mx-auto flex max-w-7xl'>
                {screenSize.aboveXL && (
                    <SuspenseLoader comp={<SignAnimation />} />
                )}
                <main className='wrapper flex items-center justify-center'>
                    <Sign />
                </main>
            </div>
        </div>
    )
}

export default SignPage
