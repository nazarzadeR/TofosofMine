import * as yup from 'yup'
import { TFunction } from 'i18next'

import { mergeSchemas } from '@/util'

// * minimum one uppercase, one lowercase, one special
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const UsernameSchema = (t: TFunction) =>
    yup.object().shape({
        username: yup.string().required(t('sign.username.error.required')),
    })

const PasswordSchema = (t: TFunction) =>
    yup.object().shape({
        password: yup
            .string()
            .min(8, ({ min }) =>
                t('sign.password.error.min').replace('$', `${min}`)
            )
            .required(t('sign.password.error.required'))
            .matches(passwordRegex, t('sign.password.error.match')),
    })

const ConfirmSchema = (t: TFunction) =>
    yup.object().shape({
        confirm: yup
            .string()
            .required(t('sign.confirm.error.required'))
            .oneOf([yup.ref('password')], t('sign.confirm.error.same')),
    })

export const UserEmailSchema = (t: TFunction) =>
    yup.object().shape({
        email: yup
            .string()
            .email(t('sign.email.error.notMatches'))
            .matches(emailRegex, t('sign.email.error.notMatches'))
            .required(t('sign.email.error.required')),
    })

export const LoginSchema = (t: TFunction) =>
    mergeSchemas(UsernameSchema(t), PasswordSchema(t))

export const RegisterSchema = (t: TFunction) =>
    mergeSchemas(UsernameSchema(t), PasswordSchema(t), ConfirmSchema(t))
