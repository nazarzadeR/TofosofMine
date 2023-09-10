import React from 'react'
import Lottie from 'lottie-react'

import { randomFromArr } from '@/util'
import useConst from '@/hooks/useConst'
import useRedirect from '@/hooks/useRedirect'
import ErrorNotFoundAnimationWithRobot from '@/asset/lottie/ErrorNotFoundAnimationWithPerson.json'
import ErrorNotFoundAnimationWithPerson from '@/asset/lottie/ErrorNotFoundAnimationWithRobot.json'

const NotFound = () => {
    const NotFoundAnimation = useConst(
        randomFromArr([
            ErrorNotFoundAnimationWithRobot,
            ErrorNotFoundAnimationWithPerson,
        ])
    )

    useRedirect({
        wait: 5,
    })

    return (
        <main className='wrapper flex items-center justify-center'>
            <Lottie animationData={NotFoundAnimation} />
        </main>
    )
}

export default NotFound
