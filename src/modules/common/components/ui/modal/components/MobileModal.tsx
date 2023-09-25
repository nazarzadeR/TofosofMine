import React, { useState } from 'react'
import { motion, PanInfo } from 'framer-motion'

import AbstractModal from './AbstractModal'

type TCatchOnDargEvents = {
    onClose: VoidFunction
    onExpand(expand?: boolean): void
}

const MobileModal: React.FC<AppComponent.TAbstractModalProps> = ({
    children,
    MobileTitle,
    MobileLeftCornerComp,
    ...rest
}) => {
    const [expanded, setExpanded] = useState(false)

    const onExpand = (expand = true) => setExpanded(() => expand)
    const modifiedProps = {
        ...rest,
        onClose: () => {
            rest.onClose()
            onExpand(false)
        },
    }
    const onDragHandle = catchOnDragEvents({
        onExpand,
        onClose: rest.onClose,
    })

    return (
        <AbstractModal {...modifiedProps}>
            <motion.div
                exit='exit'
                initial='initial'
                variants={mobileModalAnimation}
                animate={!expanded ? 'enter' : 'expand'}
                className='secondary fixed  left-1/2 z-50 flex h-[70%] w-[96%] -translate-x-1/2 flex-col gap-2 rounded-md scrollbar-none'
            >
                <motion.div
                    drag='y'
                    dragDirectionLock
                    dragElastic={false}
                    onDrag={onDragHandle}
                    onDragEnd={onDragHandle}
                    dragConstraints={{ top: 0, bottom: 0 }}
                    className='relative z-[100] flex h-[60px] w-full items-end justify-center'
                >
                    {MobileLeftCornerComp && (
                        <span className='absolute left-1 top-1/2 block h-full -translate-y-1/2'>
                            {MobileLeftCornerComp}
                        </span>
                    )}
                    {MobileTitle && (
                        <h3 className='text-text text-lg capitalize'>
                            {MobileTitle}
                        </h3>
                    )}
                    <span className='absolute -top-1 mt-3 h-[5px] w-[50px] rounded-lg bg-black dark:bg-white' />
                </motion.div>
                <motion.div className='h-full w-full p-2'>
                    {children && children}
                </motion.div>
            </motion.div>
        </AbstractModal>
    )
}

export default MobileModal

const catchOnDragEvents = ({ onClose, onExpand }: TCatchOnDargEvents) => {
    return (_: never, i: PanInfo) => {
        if (i.offset.y >= 20 && onClose) {
            onClose()
            onExpand(false)
        }
        if (i.offset.y <= -20 && onExpand) onExpand()
    }
}

const mobileModalAnimation: TAnimation = {
    initial: {
        bottom: '-100%',
    },
    enter: {
        bottom: '1%',
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
        },
    },
    expand: {
        height: '90%',
        bottom: '1%',
        transition: {
            duration: 0.2,
            ease: 'linear',
        },
    },
    exit: {
        bottom: '-100%',
        transition: {
            duration: 0.6,
            ease: 'easeInOut',
        },
    },
}
