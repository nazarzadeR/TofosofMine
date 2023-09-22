import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'

type Props = TDetailedComponent<{
    isMain?: boolean
    exit?: keyof typeof variants
    initial?: keyof typeof variants
    animate?: keyof typeof variants
}>

const DropDownMenu: React.FC<Props> = ({
    children,
    isMain = false,
    exit = 'toRight',
    animate = 'animate',
    initial = 'animate',
    ...rest
}) => {
    return (
        <AnimatePresence>
            {isMain ? (
                <motion.ul
                    exit={exit}
                    initial={initial}
                    animate={animate}
                    variants={variants}
                    {...rest}
                >
                    {children && children}
                </motion.ul>
            ) : null}
        </AnimatePresence>
    )
}

export default DropDownMenu

const variants = {
    fromRight: {
        x: 300,
    },
    fromLeft: {
        x: -300,
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.4,
        },
    },
    toLeft: {
        x: -300,
        transition: {
            duration: 0.4,
        },
    },
    toRight: {
        x: 300,
        transition: {
            duration: 0.4,
        },
    },
}
