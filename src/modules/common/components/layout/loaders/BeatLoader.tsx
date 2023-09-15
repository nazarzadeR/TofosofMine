import React from 'react'
import { motion } from 'framer-motion'

const BeatLoader = () => (
    <motion.div className='wrapper flex min-h-[25px]'>
        {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
                key={i}
                initial={{
                    left: 'calc(50% + ' + (-18 + i * 6) + ' * 1px)',
                }}
                animate={{
                    y: ['0px', '-10px', '0px', '0px', '0px'],
                    height: ['10px', '30px', '10px', '10px', '10px'],
                    color: [
                        '#485563',
                        '#606c88',
                        '#3f4c6b',
                        '#29323c',
                        '#485563',
                    ],
                    transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        repeatType: 'mirror',
                        delay: i * 0.1 + 1,
                    },
                }}
                className={`absolute top-[calc(50%-6px)] h-[10px] w-[4px] bg-[#485563]`}
            />
        ))}
    </motion.div>
)

export default BeatLoader
