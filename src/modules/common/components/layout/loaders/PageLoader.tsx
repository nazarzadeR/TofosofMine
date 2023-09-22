import React from 'react'
import { motion } from 'framer-motion'

const PageLoader = () => (
    <div className='wrapper flex items-center justify-center'>
        <div className='h-[48px] w-[48px] rounded-full text-gray-700 perspective-10 rotate-z-45'>
            <motion.div
                initial={{
                    rotateY: '70deg',
                    animationDelay: '400',
                }}
                animate={pageLoaderAnimation}
                className=' absolute left-0 top-0 block h-[inherit] w-[inherit] rounded-full text-[#ff3d00]'
            />

            <motion.div
                initial={{
                    rotateX: '70deg',
                }}
                animate={pageLoaderAnimation}
                className='left-0 top-0 block h-[inherit] w-[inherit] rounded-full'
            />
        </div>
    </div>
)

export const pageLoaderAnimation = {
    boxShadow: [
        '0.2em 0px 0 0px currentcolor',
        '0.2em 0.2em 0 0 currentcolor',
        '0 0.2em 0 0px currentcolor',
        '-0.2em 0.2em 0 0 currentcolor',
        '-0.2em 0 0 0 currentcolor',
        '-0.2em -0.2em 0 0 currentcolor',
        '0px -0.2em 0 0 currentcolor',
        '0.2em -0.2em 0 0 currentcolor',
        '0.2em 0px 0 0px currentcolor',
    ],
    transition: {
        duration: 1,
        ease: 'linear',
        repeat: Infinity,
    },
}

export default PageLoader
