import React from 'react'

import { TimesIcon } from '@/modules/common'
import { useSettingModal } from '../store/setting-modal'
import { useTranslation } from 'react-i18next'

type Props = {
    onClose: () => void
}

const SettingHeader: React.FC<Props> = ({ onClose }) => {
    const { t } = useTranslation()
    const { mode } = useSettingModal()
    return (
        <div className='hidden h-max w-full items-center justify-start text-center sm:flex sm:justify-between sm:border-b-[1px]  sm:px-2 '>
            <h3 className='text-text '>{t(`words.${mode.toLowerCase()}`)}</h3>
            <span
                onClick={onClose}
                className='group hidden h-[45px] w-[30px] cursor-pointer items-center justify-center sm:flex'
            >
                <TimesIcon className=' text-center text-xl group-hover:scale-105' />
            </span>
        </div>
    )
}

export default SettingHeader
