import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, FormikHelpers } from 'formik'
import { useTranslation } from 'react-i18next'

import { useGlobals } from '@/context'
import useApiMutation from '@/hooks/useApiMutation'
import useSignType from '../../../../store/sign-type'
import { UserEmailSchema } from '../../../../schema/sign-schema'
import { Button, EMailIcon, InputField } from '@/components'

const MagicForm = () => {
    const { isUp } = useGlobals()
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { setMAIN } = useSignType()
    // const magicMutation = useApiMutation<{ email: string }>({
    //     fn: login,
    // })

    const showTooltip = !isUp ? t('warnings.BACKEND_NOT_UP') : undefined

    const onSubmit = async (
        _credential: { email: string },
        _helpers: FormikHelpers<{ email: string }>
    ) => {
        // await magicMutation.mutateAsync(credential, {
        //     onSuccess(res) {
        //         if (res.status < 200 || res.status >= 300) return
        //       
        //     },
        //     onSettled: (res) => {
        //         if (res && res?.status <= 400) return
        //         helpers.resetForm()
        //         helpers.setSubmitting(false)
        //     },
        // })
    }

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={{ email: '' }}
            validationSchema={UserEmailSchema(t)}
        >
            {(ctx) => (
                <Form className='flex h-max w-max max-w-[360px] -translate-y-10 flex-col gap-5 max-xl:translate-y-0'>
                    <div className='flex flex-col gap-1 self-center'>
                        <h2 className='sm-lg:text-xl text-center text-3xl max-lg:text-2xl'>
                            {t('sign.info.other.magic.head')}
                        </h2>

                        <p className='self-center text-center text-sm text-gray-400'>
                            {t('sign.info.other.magic.body')}
                        </p>
                    </div>

                    <InputField
                        id='email'
                        name='email'
                        Icon={<EMailIcon />}
                        className="m-auto min-w-[290px]"
                        placeholder={t('sign.email.hint')}
                    />

                    <Button
                        type='submit'
                        className='w-[60%]'
                        tooltip={showTooltip}
                        loading={ctx.isSubmitting}
                        disabled={!isUp || !ctx.isValid}
                    >
                        {t('sign.button.magic')}
                    </Button>

                    <p className='self-center text-gray-400'>
                        {t('sign.link.goLogin')}
                        <span
                            onClick={setMAIN}
                            className='cursor-pointer text-teal-400'
                        >
                            &nbsp; {t('sign.button.login')}
                        </span>
                    </p>
                </Form>
            )}
        </Formik>
    )
}

export default MagicForm
