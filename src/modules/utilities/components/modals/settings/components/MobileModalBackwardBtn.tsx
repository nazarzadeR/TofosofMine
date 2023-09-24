import React from 'react'

import { useSettingModal } from '../store/setting-modal'
import { BackWardIcon, useGlobals } from '@/modules/common'

const MobileModalBackwardBtn = () => {
    const { screenSize } = useGlobals()
    const { mode, setMode } = useSettingModal()

    const handleBackMainSection = () => {
        if (screenSize.aboveMD) return

        setMode('MAIN')
    }

    if (screenSize.isSM && mode === 'MAIN') return

    return (
        <span
            onClick={handleBackMainSection}
            className='group mr-2 flex h-[45px] w-[30px] cursor-pointer items-center justify-center sm:hidden '
        >
            <BackWardIcon className='text-center text-xl group-hover:scale-105' />
        </span>
    )
}

export default MobileModalBackwardBtn
