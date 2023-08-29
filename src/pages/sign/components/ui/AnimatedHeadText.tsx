import React from 'react'
import { motion } from 'framer-motion'

import { animatedTextAnimation } from '@/data/animationVariant'

type Props = TComponent<{
    text: string
}>

const AnimatedHeadText: React.FC<Props> = ({ text }) => {
    const letters = Array.from(text)
    const { container, child } = animatedTextAnimation
    return (
        <motion.h2
            initial='hidden'
            animate='visible'
            variants={container}
            className='text-center text-3xl font-[600] max-md:text-xl max-sm:text-xl'
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.h2>
    )
}

export default AnimatedHeadText
