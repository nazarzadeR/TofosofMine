import React from 'react'
import { motion } from 'framer-motion'

type Props = TComponent<{
    onEvent(): void
    delay?: number
    Icon: React.ComponentType<any>
}>

const AuthCard: React.FC<Props> = ({ Icon, onEvent, delay = 0 }) => {
    return (
        <motion.div
            onClick={onEvent}
            className='secondary items flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-md'
            whileHover={{
                scale: 1.05,
            }}
            initial={{
                scale: 0.9,
                opacity: 0,
                perspective: '800px',
            }}
            animate={{
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 1,
                    delay: delay * 0.3,
                    ease: 'easeInOut',
                },
            }}
        >
            {Icon && <Icon className='text-text text-2xl' />}
        </motion.div>
    )
}

export default AuthCard
