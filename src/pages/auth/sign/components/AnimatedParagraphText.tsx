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
        <motion.p
            initial='hidden'
            animate='visible'
            variants={container}
            className='text-center text-lg text-gray-400'
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.p>
    )
}

export default AnimatedHeadText
