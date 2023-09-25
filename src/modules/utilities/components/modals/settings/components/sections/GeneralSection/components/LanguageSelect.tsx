import React from 'react'
import { useTranslation } from 'react-i18next'

import { Select } from '@modules/common'

const LanguageSelect = () => {
    const { t, i18n } = useTranslation()

    return (
        <div className='m-1 my-4 flex w-full flex-col gap-1'>
            <h3 className='ml-2 capitalize'>{t('words.language')}</h3>
            <Select
                value={i18n.language}
                onSelect={(lang: any) => i18n.changeLanguage(lang)}
            >
                <option value='en'>English</option>
                <option value='ru'>Русский</option>
                <option value='az'>Azərbaycanca</option>
            </Select>
        </div>
    )
}

export default LanguageSelect
