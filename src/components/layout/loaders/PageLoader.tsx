import React from 'react'
import { motion } from 'framer-motion'

import { pageLoaderAnimation } from '@/data/animationVariant'

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

export default PageLoader
