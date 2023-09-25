import React from 'react'

import { useSettingModal, TSettingMode } from '../store/setting-modal'
import { MainSection, GeneralSection, ThemeSection } from './sections'

const settingModeComponents: Record<TSettingMode, React.ComponentType> = {
    SETTING: MainSection,
    THEME: ThemeSection,
    GENERAL: GeneralSection,
}

const SettingContent = () => {
    const { mode } = useSettingModal()

    const Mode = settingModeComponents[mode]

    return (
        <div className='h-full w-full'>
            <Mode />
        </div>
    )
}

export default SettingContent
