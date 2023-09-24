import React from 'react'

import { SettingIcon, ThemeIcon } from '@/modules/common'
import { useTranslation } from 'react-i18next'
import MainSettingsLink from './components/MainSettingsLink'

const MainSection = () => {
    const { t } = useTranslation()
    return (
        <div className='flex h-full w-full flex-col gap-2'>
            <div className='h-max w-full text-center '>
                <h3 className='text-lg'>{t('sidebar.setting.setting')}</h3>
            </div>
            <div className='flex w-full flex-wrap gap-2 justify-center' >
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

export default MainSection
