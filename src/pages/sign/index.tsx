import React from 'react'
import Lottie from 'lottie-react'
import { useTranslation } from 'react-i18next'

import Sign from './Sign'
import AnimatedHeadText from './components/ui/AnimatedHeadText'
import AnimatedParagraphText from './components/ui/AnimatedParagraphText'
import signAnimation from '@/asset/lottie/LoginAndRegisterRouteAnimation.json'

const SignPage = () => {
    const { t } = useTranslation()

    return (
        <div className='wrapper mx-auto flex max-w-7xl'>
            <div className='wrapper flex flex-col items-center justify-center max-xl:hidden'>
                <div className='mt-3 flex h-max w-full max-w-xl flex-col gap-7'>
                    <div className='flex flex-col items-center justify-center'>
                        <AnimatedHeadText text={t('sign.info.login.head')} />
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
    )
}

export default SignPage
