import React from 'react'

import { useSettingModal } from '../store/setting-modal'
import { BackWardIcon, TimesIcon, useGlobals } from '@/modules/common'

type Props = {
    onClose: () => void
}

const SettingHeader: React.FC<Props> = ({ onClose }) => {
    return (
        <div className='hidden h-max w-full items-center justify-start text-center sm:flex sm:justify-end  sm:border-b-[1px] '>
            <span
                onClick={onClose}
                className='group mr-2 hidden h-[45px] w-[30px] cursor-pointer items-center justify-center sm:flex'
            >
                <TimesIcon className=' text-center text-xl group-hover:scale-105' />
            </span>
        </div>
    )
}

export default SettingHeader
