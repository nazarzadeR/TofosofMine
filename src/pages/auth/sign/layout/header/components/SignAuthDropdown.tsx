import React from 'react'
import { useTranslation } from 'react-i18next'

import {
    Dropdown,
    SettingIcon,
    useBoolean,
    DropdownMenu,
    DropdownMenuItem,
    SettingGlobalIcon,
} from '@/modules/common'
import { useUtility } from '@/modules/utilities'

const SignAuthDropdown = () => {
    const { t } = useTranslation()
    const [isOpen, { toggle, off }] = useBoolean(false)
    const {
        setting: { on },
    } = useUtility()

    const handleClickWithCloseDropdown = (fn: () => void) => {
        return () => {
            off()
            fn()
        }
    }

    return (
        <div className='relative h-full w-full'>
            <span
                className='block h-full w-full cursor-pointer text-xl'
                onClick={toggle}
            >
                <SettingIcon />
            </span>
            <Dropdown isOpen={isOpen}>
                <DropdownMenu isMain>
                    <DropdownMenuItem
                        LeftIcon={<SettingGlobalIcon />}
                        onClickEvent={handleClickWithCloseDropdown(on)}
                    >
                        {t('sidebar.setting.setting')}
                    </DropdownMenuItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default SignAuthDropdown
