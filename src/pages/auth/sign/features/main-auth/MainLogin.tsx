import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, FormikHelpers } from 'formik'
import { useTranslation } from 'react-i18next'

import useAuth from '@/store/auth'
import { login } from '@/service/api'
import { useGlobals } from '@/context'
import useSignType from '../../store/sign-type'
import useApiMutation from '@/hooks/useApiMutation'
import { LoginSchema } from '../../schema/sign-schema'
import { UserIcon, Button, LockIcon, InputField } from '@/components'

const LoginForm = () => {
    const { isUp } = useGlobals()
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { setAuthWithTokens } = useAuth()
    const { goRegister, setRESET, setOTHER } = useSignType()
    const loginMutation = useApiMutation<AppMeta.TSign>({
        fn: login,
    })

    const showTooltip = !isUp ? t('warnings.BACKEND_NOT_UP') : undefined

    const onSubmit = async (
        credential: AppMeta.TSign,
        helpers: FormikHelpers<AppMeta.TSign>
    ) => {
        await loginMutation.mutateAsync(credential, {
            onSuccess(res) {
                if (res.status < 200 || res.status >= 300) return

                setAuthWithTokens({
                    user: res.data.user,
                    ...res.data.tokens,
                })

                navigate('/app')
            },
            onSettled: (res) => {
                if (res && res?.status <= 400) return

                helpers.resetForm()
                helpers.setSubmitting(false)
            },
        })
    }

    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={LoginSchema(t)}
            initialValues={{ username: '', password: '' }}
        >
            {(ctx) => (
                <Form className='flex h-max w-max -translate-y-10 flex-col gap-5 max-xl:translate-y-0'>
                    <h2 className='sm-lg:text-xl text-center text-4xl max-lg:text-3xl'>
                        {t('sign.head.login')}
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

                    <div className='flex max-w-full gap-10'>
                        <p
                            onClick={setRESET}
                            className='ml-2 cursor-pointer text-teal-500'
                        >
                            {t('sign.link.forgot')}
                        </p>

                        <p
                            onClick={setOTHER}
                            className='cursor-pointer pr-2 text-teal-500'
                        >
                            {t('sign.link.otherWays')}
                        </p>
                    </div>

                    <Button
                        type='submit'
                        className='w-60'
                        tooltip={showTooltip}
                        loading={ctx.isSubmitting}
                        disabled={!isUp || !ctx.isValid}
                    >
                        {t('sign.button.login')}
                    </Button>

                    <p className='self-center text-gray-400'>
                        {t('sign.link.login')}
                        <span
                            onClick={goRegister}
                            className='cursor-pointer text-teal-500'
                        >
                            &nbsp; {t('sign.button.register')}
                        </span>
                    </p>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm
