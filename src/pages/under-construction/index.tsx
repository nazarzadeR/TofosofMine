import React from 'react'
import Lottie from 'lottie-react'
import { useTranslation } from 'react-i18next'

import underConstructionAnimation from '@/asset/lottie/UnderConstructionAnimation.json'

const UnderConstruction = () => {
    const { t } = useTranslation()
    return (
        <main className='wrapper flex flex-col items-center justify-center'>
            <h2 className='text-center text-2xl font-[600] max-md:text-xl max-sm:text-xl'>
                {t('underConstruction')}
            </h2>
            <Lottie
                className='w-full max-w-[620px]'
                animationData={underConstructionAnimation}
            />
        </main>
    )
}

export default UnderConstruction
