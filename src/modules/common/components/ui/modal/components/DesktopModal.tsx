import React from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

import AbstractModal from './AbstractModal'

const DesktopModal: React.FC<AppComponent.TAbstractModalProps> = ({
    children,
    addDesktopClassName = '',
    ...rest
}) => {
    return (
        <AbstractModal {...rest}>
            <motion.div
                exit='exit'
                animate='enter'
                initial='initial'
                variants={desktopModalAnimation}
                className={twMerge(
                    'secondary fixed  left-1/2 top-1/2 z-50 flex h-[40%] w-[80%] -translate-x-1/2 -translate-y-1/2 flex-col rounded-md scrollbar-none md:w-[600px]',
                    addDesktopClassName
                )}
            >
                {children && children}
            </motion.div>
        </AbstractModal>
    )
}

export default DesktopModal

const desktopModalAnimation: TAnimation = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.4,
        },
    },
}
