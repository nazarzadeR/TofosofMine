import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = TComponent<{
    isOpen: boolean
}>

const Dropdown: React.FC<Props> = ({ children, isOpen }) => {
    return (
        <AnimatePresence>
            {isOpen ? (
                <motion.div
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    initial={{ opacity: 0, scale: 0.5, x: -220 }}
                    transition={{ duration: 0.4, ease: 'anticipate' }}
                    className='secondary absolute top-[40px] z-[900] h-max w-[230px] overflow-hidden rounded-lg p-3'
                >
                    {children && children}
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}

export default Dropdown
