import React from 'react'
import { motion } from 'framer-motion'

import useSidebarShow from './hook/useSidebarShow'
import useSidebarAnimation from './hook/useSidebarAnimation'

const Sidebar = () => {
    const isSidebarShow = useSidebarShow()
    const sidebarAnimationController = useSidebarAnimation()

    if (isSidebarShow) return

    return (
        <motion.aside
            animate={sidebarAnimationController}
            className='secondary my-auto ml-2 h-[98%] w-[70px] rounded-lg'
        ></motion.aside>
    )
}


export default Sidebar
