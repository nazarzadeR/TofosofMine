import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, FormikHelpers } from 'formik'
import { useTranslation } from 'react-i18next'

import useAuth from '@/store/auth'
import { useGlobals } from '@/context'
import { register } from '@/service/api'
import useSignType from '../../store/sign-type'
import useApiMutation from '@/hooks/useApiMutation'
import { RegisterSchema } from '../../schema/sign-schema'
import {
    Button,
    LockIcon,
    UserIcon,
    BeatLoader,
    InputField,
} from '@/components'

type TSignRegister = AppMeta.TSign & {
    confirm: string
}

const SimpleRegisterComponent = () => {
    const { isUp } = useGlobals()
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { goLogin } = useSignType()
    const { setAuthWithTokens } = useAuth()
    const registerMutation = useApiMutation<AppMeta.TSign>({
        fn: register,
    })

    const showTooltip = !isUp ? t('warnings.BACKEND_NOT_UP') : undefined

    const onSubmit = async (
        credential: TSignRegister,
        helpers: FormikHelpers<TSignRegister>
    ) => {
        const { confirm, ...registerCredential } = credential

        await registerMutation.mutateAsync(registerCredential, {
            onSuccess(res) {
                if (res.status < 200 || res.status >= 300) return

                setAuthWithTokens({
                    user: res.data.user,
                    ...res.data.tokens,
                })

                navigate('/app')
            },
            onSettled: (res) => {
                if (res && res?.status < 400) return

                helpers.resetForm()
                helpers.setSubmitting(false)
            },
        })
    }

    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={RegisterSchema(t)}
            initialValues={{ username: '', password: '', confirm: '' }}
        >
            {(ctx) => (
                <Form className='flex h-max w-max -translate-y-10 flex-col  gap-5 max-xl:translate-y-0'>
                    <h2 className='sm-lg:text-xl text-center text-4xl max-lg:text-3xl'>
                        {t('sign.head.register')}
                    </h2>
                    <InputField
                        id='username'
                        name='username'
                        placeholder={t('sign.username.hint')}
                        Icon={<UserIcon />}
                    />
                    <InputField
                        pwd
                        id='password'
                        name='password'
                        placeholder={t('sign.password.hint')}
                        Icon={<LockIcon />}
                    />
                    <InputField
                        pwd
                        id='confirm'
                        name='confirm'
                        placeholder={t('sign.confirm.hint')}
                        Icon={<LockIcon />}
                    />

                    <p
                        onClick={goLogin}
                        className='ml-2 cursor-pointer text-teal-400'
                    >
                        {t('sign.link.register')}
                    </p>

                    <Button
                        type='submit'
                        disabled={!isUp}
                        tooltip={showTooltip}
                        Loader={<BeatLoader />}
                        loading={ctx.isSubmitting}
                        className='w-80 self-center'
                    >
                        {t('sign.button.register')}
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default SimpleRegisterComponent
