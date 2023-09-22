import React from 'react'
import { twMerge } from 'tailwind-merge'
import { useTranslation } from 'react-i18next'

import { useAuthStore } from '@/modules/authentication'
import { TSettingMode, useSettingModal } from '../store/setting-modal'

type Props = TComponent<{
    tWord: string
    to: TSettingMode
    className?: string
    Icon?: React.ReactNode
    requireAuth?: boolean
}>

const SettingLinks: React.FC<Props> = ({
    to,
    Icon,
    tWord,
    children,
    requireAuth,
    className = '',
}) => {
    const { t } = useTranslation()
    const { hasMeta } = useAuthStore()
    const { mode, setMode } = useSettingModal()

    const isSelected = mode === to ? 'bg-slate-200 ' : ''

    if (requireAuth && !hasMeta()) return

    return (
        <div
            onClick={() => setMode(to)}
            className={twMerge(
                'cursor-pointe mx-auto h-max w-full cursor-pointer p-2',
                className,
                isSelected
            )}
        >
            {children ? (
                children
            ) : (
                <div className='flex items-center gap-2'>
                    {Icon && Icon}
                    <p className='text-center capitalize'>
                        {t(`words.${tWord}`)}
                    </p>
                </div>
            )}
        </div>
    )
}

export default SettingLinks
