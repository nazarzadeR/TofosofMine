import React from 'react'

import {
    useSettingModal,
    TSettingMode,
} from '@modules/utilities/components/modals/settings/store/setting-modal'

type Props = TComponent<{
    name: string
    to: TSettingMode
    Icon?: React.ReactNode
}>

const MainSettingsLink: React.FC<Props> = ({ to, name, Icon }) => {
    const { setMode } = useSettingModal()
    return (
        <div
            onClick={() => setMode(to)}
            className='flex h-[120px] w-[160px] flex-col place-content-center place-items-center gap-1 rounded-md shadow-[rgba(0,0,0,.35)_0_5px_15px]'
        >
            {Icon && <span className='text-2xl'>{Icon}</span>}
            <h4 className='capitalize'>{name}</h4>
        </div>
    )
}

export default MainSettingsLink
