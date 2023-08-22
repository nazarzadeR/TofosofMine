import type { PropsWithRef } from 'react'

declare global {
    type TComponent<T extends Record<string, unknown> = object> = {
        [K in keyof T]: T[K]
    } & { children?: ReactNode }

    type TComponentWithREf<T extends Record<string, unknown> = object> =
        TComponent<T> & PropsWithRef
}
