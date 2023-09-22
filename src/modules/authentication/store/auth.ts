import { create } from 'zustand'

import { useRefreshTokenStore } from './refresh-token'
import {
    getUserMetaFromTokenEndpoint,
    refreshEndpoint,
    logoutEndpoint,
} from '@modules/authentication'

type State = {
    checked: boolean
    user: Partial<AppMeta.TUserMeta>
    isPersisting: boolean
    access_token: string | undefined
}

type Action = {
    reset(): void
    persist(): void
    logout(): Promise<void>
    isRequirePersist(): boolean
    setAuth(credentials: Partial<State>): void
    hasMeta(property?: keyof AppMeta.TUserMeta): boolean
    setAuthWithTokens(
        credentials: Partial<State & { refresh_token: string }>
    ): void
}

type Store = State & Action

const defaultUserStore: Partial<AppMeta.TUserMeta> = {
    id: undefined,
    role: undefined,
    username: undefined,
}

const defaultAuthStore: State = {
    user: defaultUserStore,
    checked: false,
    isPersisting: false,
    access_token: undefined,
}

export const useAuthStore = create<Store>((set, get) => ({
    ...defaultAuthStore,
    async persist() {
        set({ isPersisting: true })

        const { getToken } = useRefreshTokenStore.getState()

        const token = getToken()

        if (token.length === 0) {
            return set({ checked: true, isPersisting: false })
        }

        const access_token = await refreshEndpoint(token)

        if (typeof access_token !== 'string') {
            return set({ checked: true, isPersisting: false })
        }

        const userMeta: AppMeta.TUserMeta =
            await getUserMetaFromTokenEndpoint(access_token)

        set({
            user: userMeta,
            access_token,
            isPersisting: false,
        })
    },
    async setAuth(credentials) {
        set(() => credentials)
    },

    hasMeta(property) {
        const { access_token, user } = get()

        if (property !== undefined) return !!user[property]

        return !!access_token && !!user.id
    },
    isRequirePersist() {
        const { access_token, checked } = get()

        return !checked && !access_token
    },
    async setAuthWithTokens(credentials) {
        const { setAuth } = get()
        const { setToken } = useRefreshTokenStore.getState()
        const { refresh_token = '', ...rest } = credentials

        setToken(refresh_token)
        setAuth(rest)
    },
    async logout() {
        const { reset } = get()
        const { setToken, getToken } = useRefreshTokenStore.getState()
        const token = getToken()

        setToken(undefined)
        await logoutEndpoint(token)

        reset()
    },
    async reset() {
        set(() => defaultAuthStore)
    },
}))
