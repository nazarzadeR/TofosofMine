import type { PropsWithRef } from 'react'
import type { Variants, TargetAndTransition } from 'framer-motion'

declare global {
    type TAnimation = Variants & TargetAndTransition

    export type TDetailedComponent<
        T extends Record<string, any> = object,
        U = HTMLAttributes<HTMLElement>,
    > = TComponent<T> & Omit<U, keyof T>

    type TComponent<T extends Record<string, unknown> = object> = {
        [K in keyof T]: T[K]
    } & { children?: ReactNode }

    type TComponentWithREf<T extends Record<string, unknown> = object> =
        TComponent<T> & PropsWithRef

    export type TDetailedComponentWithRef<
        T extends Record<string, any> = object,
        U = HTMLAttributes<HTMLElement>,
    > = TComponentWithRef<T> & Omit<U, keyof T>
}
