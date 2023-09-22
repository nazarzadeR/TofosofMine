import React from 'react'
import { motion } from 'framer-motion'

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

const animatedTextAnimation: Record<string, TAnimation> = {
    child: {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    },
    container: {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.01 * i },
        }),
    },
}

export default AnimatedHeadText
