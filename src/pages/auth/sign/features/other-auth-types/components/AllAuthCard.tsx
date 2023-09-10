import React from 'react'
import { nanoid } from 'nanoid'
import { useTranslation } from 'react-i18next'

import AuthCard from './AuthCard'
import useSignType from '../../../store/sign-type'
import useOtherAuthType from '../store/other-auth-types'
import { GithubIcon, GoogleIcon, MagicLinkIcon } from '@/components'

const AllAuthCard: React.FC<TComponent> = () => {
    const { t } = useTranslation()
    const { setMAIN } = useSignType()
    const { setType } = useOtherAuthType()

    const cards = [
        { Icon: MagicLinkIcon, onEvent: () => setType('MAGIC') },
        { Icon: GithubIcon, onEvent: () => null }, //  setType('GITHUB') },
        { Icon: GoogleIcon, onEvent: () => null} // setType('GOOGLE') },
    ]

    return (
        <div className='wrapper flex max-h-[450px] max-w-[420px] flex-col place-content-center  place-items-center gap-5'>
            <h3 className='text-xl'>{t('sign.info.other.head')}</h3>
            <div className=' flex place-content-center  place-items-center gap-3'>
                {cards.map(({ Icon, onEvent }, i) => (
                    <AuthCard
                        delay={i}
                        Icon={Icon}
                        key={nanoid()}
                        onEvent={onEvent}
                    />
                ))}
            </div>
            <p className='self-center text-gray-400'>
                {t('sign.link.magic')}
                <span
                    onClick={setMAIN}
                    className='cursor-pointer text-teal-500'
                >
                    &nbsp; {t('sign.button.login')}
                </span>
            </p>
        </div>
    )
}

export default AllAuthCard
