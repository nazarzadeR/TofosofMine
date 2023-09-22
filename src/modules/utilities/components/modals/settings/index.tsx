import React from 'react'
import { useTranslation } from 'react-i18next'

import { SettingLink, SettingContent } from './components'
import { LanguageIcon, Modal, ThemeIcon, TimesIcon } from '@/modules/common'

const SettingModal: React.FC<AppComponent.TAbstractModalProps> = (props) => {
    const { t } = useTranslation()

    return (
        <Modal
            {...props}
            addDesktopClassName='h-[60%] md:w-[80%] max-w-[800px]'
        >
            <div className='flex h-full w-full'>
                <div className='primary hidden h-full w-[280px] flex-col items-center justify-between  rounded-l-md md:flex'>
                    <div className='h-max w-full'>
                        <h3 className='my-2 px-2 text-start text-lg'>
                            {t('sidebar.setting.setting')}
                        </h3>
                    </div>
                    <div className='hidden h-full w-full flex-col md:flex '>
                        <SettingLink
                            to='THEME'
                            tWord='theme'
                            Icon={<ThemeIcon />}
                        />
                        <SettingLink
                            to='LANG'
                            tWord='language'
                            Icon={<LanguageIcon />}
                        />
                    </div>
                </div>
                <div className='flex h-full w-full flex-col'>
                    <div className=' hidden h-max w-full items-center justify-end border-b-[1px] text-center  md:flex '>
                        <span
                            onClick={props.onClose}
                            className='group mr-2 flex h-[45px] w-[30px] cursor-pointer items-center justify-center'
                        >
                            <TimesIcon className=' text-center text-xl group-hover:scale-105' />
                        </span>
                    </div>
                    <SettingContent />
                </div>
            </div>
        </Modal>
    )
}

export default SettingModal
