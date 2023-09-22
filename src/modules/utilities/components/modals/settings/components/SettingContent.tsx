import React from 'react'

import { useGlobals } from '@/modules/common'
import { useSettingModal, TSettingMode } from '../store/setting-modal'
import { MainSection, LanguageSection, ThemeSection } from './sections'

const settingModeComponents: Record<TSettingMode, React.ComponentType> = {
    MAIN: MainSection,
    THEME: ThemeSection,
    LANG: LanguageSection,
}

const SettingContent = () => {
    const { mode } = useSettingModal()
    const { screenSize } = useGlobals()

    const Mode = screenSize.isSM
        ? settingModeComponents['MAIN']
        : settingModeComponents[mode]

    return (
        <div className='h-full w-full'>
            <Mode />
        </div>
    )
}

export default SettingContent
