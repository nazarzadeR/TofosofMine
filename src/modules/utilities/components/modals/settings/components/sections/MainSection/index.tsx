import React from 'react'

import { SettingIcon, ThemeIcon } from '@/modules/common'
import { useTranslation } from 'react-i18next'
import MainSettingsLink from './components/MainSettingsLink'

const SettingSection = () => {
    const { t } = useTranslation()
    return (
        <div className='flex h-full w-full flex-col gap-2'>
            <div className='flex w-full flex-wrap justify-center gap-2'>
                <MainSettingsLink
                    to='GENERAL'
                    name={t('words.general')}
                    Icon={<SettingIcon />}
                />

                <MainSettingsLink
                    to='THEME'
                    name={t('words.theme')}
                    Icon={<ThemeIcon />}
                />
            </div>
        </div>
    )
}

export default SettingSection
