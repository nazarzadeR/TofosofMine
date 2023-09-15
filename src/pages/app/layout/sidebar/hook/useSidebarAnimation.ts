import { useEffect } from 'react'
import { useAnimationControls } from 'framer-motion'

import useSidebar from '../store/useSidebar'

const useSidebarAnimation = () => {
    const { isOpen } = useSidebar()
    const sidebarAnimationController = useAnimationControls()

    useEffect(() => {
        const animation = isOpen
            ? sidebarOpenAnimation.open
            : sidebarOpenAnimation.initial

        sidebarAnimationController.start(animation)
    }, [isOpen])

    return sidebarAnimationController
}

export const sidebarOpenAnimation: TAnimation = {
    initial: {
        width: '70px',
        transition: {
            duration: 0.4,
            ease: 'easeInOut',
        },
    },
    open: {
        width: '280px',
        transition: {
            duration: 0.4,
            ease: 'easeInOut',
        },
    },
}

export default useSidebarAnimation
