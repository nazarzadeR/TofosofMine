import React from 'react'
import Lottie from 'lottie-react'
import { useTranslation } from 'react-i18next'

import Sign from './Sign'
import Header from './layout/header'
import { PageLoader } from '@modules/common'
import useGithubAuth from './hooks/useGithubAuth'
import AnimatedHeadText from './components/AnimatedHeadText'
import AnimatedParagraphText from './components/AnimatedParagraphText'
import signAnimation from '@/asset/lottie/LoginAndRegisterRouteAnimation.json'

const SignPage = () => {
    const { t } = useTranslation()
    const hasCode = useGithubAuth()

    if (hasCode) return <PageLoader />

    return (
        <div className='wrapper flex flex-col'>
            <Header />
            <div className='wrapper mx-auto flex max-w-7xl'>
                <div className='wrapper hidden flex-col items-center justify-center  xl:flex'>
                    <div className='mt-3 flex h-max w-full max-w-xl flex-col gap-7'>
                        <div className='flex flex-col items-center justify-center'>
                            <AnimatedHeadText
                                text={t('sign.info.login.head')}
                            />
                            <AnimatedParagraphText
                                text={t('sign.info.login.body')}
                            />
                        </div>
                        <Lottie animationData={signAnimation} />
                    </div>
                </div>
                <main className='wrapper flex items-center justify-center'>
                    <Sign />
                </main>
            </div>
        </div>
    )
}

export default SignPage
