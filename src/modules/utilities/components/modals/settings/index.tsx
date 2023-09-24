import React from 'react'
import { useTranslation } from 'react-i18next'

import { Modal, SettingIcon, ThemeIcon } from '@/modules/common'
import {
    SettingLink,
    SettingContent,
    SettingHeader,
    MobileModalBackwardBtn,
} from './components'

const SettingModal: React.FC<AppComponent.TAbstractModalProps> = (props) => {
    const { t } = useTranslation()

    return (
        <Modal
            {...props}
            MobileLeftCornerComp={<MobileModalBackwardBtn />}
            addDesktopClassName='h-[60%] md:w-[80%] max-w-[800px]'
        >
            <div className='flex h-full w-full'>
                <div className='primary hidden h-full w-[280px] flex-col items-center justify-between  rounded-l-md sm:flex'>
                    <div className='h-max w-full'>
                        <h3 className='my-2 px-2 text-start text-lg'>
                            {t('sidebar.setting.setting')}
                        </h3>
                    </div>
                    <ul className='hidden h-full w-full flex-col sm:flex '>
                        <SettingLink
                            to='GENERAL'
                            tWord='general'
                            Icon={<SettingIcon />}
                        />
                        <SettingLink
                            to='THEME'
                            tWord='theme'
                            Icon={<ThemeIcon />}
                        />
                    </ul>
                </div>
                <div className='flex h-full w-full flex-col'>
                    <SettingHeader onClose={props.onClose} />
                    <SettingContent />
                </div>
            </div>
        </Modal>
    )
}

export default SettingModal
