import { useEffect } from 'react'
import { useAnimationControls } from 'framer-motion'

import useSidebar from '../store/useSidebar'
import { sidebarOpenAnimation } from '@/data/animationVariant'

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

export default useSidebarAnimation
