import { create } from 'zustand'
import { Rabbit, enc } from 'crypto-js'
import { persist } from 'zustand/middleware'

type State = {
    token?: string
}

type Action = {
    getToken(): string
    setToken(token: string | undefined): void
}

type Store = State & Action

const useRefreshToken = create(
    persist<Store>(
        (set, get) => ({
            token: undefined,
            setToken(token) {
                if (typeof token !== 'string') {
                    set({ token: undefined })
                    return
                }

                const salt =
                    import.meta.env.VITE_REFRESH_TOKEN_SALT ||
                    'random numbers or others'

                const hashedToken = Rabbit.encrypt(token, salt).toString()

                set(() => ({ token: hashedToken }))
            },
            getToken() {
                const { token } = get()

                if (typeof token !== 'string') return ''

                const salt =
                    import.meta.env.VITE_REFRESH_TOKEN_SALT ||
                    'random numbers or others'

                return Rabbit.decrypt(token, salt).toString(enc.Utf8)
            },
        }),
        {
            name: 'token',
        }
    )
)

export default useRefreshToken
