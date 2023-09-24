import React from 'react'
import Lottie from 'lottie-react'
import { useTranslation } from 'react-i18next'

import AnimatedHeadText from './AnimatedHeadText'
import AnimatedParagraphText from './AnimatedParagraphText'
import signAnimation from '@/asset/lottie/LoginAndRegisterRouteAnimation.json'

const SignAnimation = () => {
    const { t } = useTranslation()

    return (
        <div className='wrapper hidden flex-col items-center justify-center  xl:flex'>
            <div className='mt-3 flex h-max w-full max-w-xl flex-col gap-7'>
                <div className='flex flex-col items-center justify-center'>
                    <AnimatedHeadText text={t('sign.info.login.head')} />
                    <AnimatedParagraphText text={t('sign.info.login.body')} />
                </div>
                <Lottie animationData={signAnimation} />
            </div>
        </div>
    )
}

export default SignAnimation
