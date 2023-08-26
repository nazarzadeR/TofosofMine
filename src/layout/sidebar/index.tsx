import React from 'react'

import { useGlobals } from '@/context'

const Sidebar = () => {
    const { screenSize: { isSM } } = useGlobals();

    if(isSM) return;
    
    return <aside className=''>sidebar</aside>
}

export default Sidebar
