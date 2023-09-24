import React from 'react'
import { createPortal } from 'react-dom'
import { twMerge } from 'tailwind-merge'
import { AnimatePresence } from 'framer-motion'

const AbstractModal: React.FC<AppComponent.TAbstractModalProps> = ({
    isOpen,
    onClose,
    children,
    addOverlayClassName = '',
}) => {
    return createPortal(
        <AnimatePresence>
            {isOpen ? (
                <>
                    <div
                        onClick={onClose}
                        className={twMerge(
                            'fixed inset-0 z-40 bg-black opacity-40',
                            addOverlayClassName
                        )}
                    />

                    {children && children}
                </>
            ) : null}
        </AnimatePresence>,
        document.getElementById('portal')!
    )
}

export default AbstractModal
