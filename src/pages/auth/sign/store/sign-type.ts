import { create } from 'zustand'

export type LoginType = 'MAIN' | 'OTHER' | 'RESET'

type State = {
    type: boolean
    loginType: LoginType
}

type Action = {
    goLogin(): void
    goRegister(): void
    setMAIN(): void
    setOTHER(): void
    setRESET(): void
    setType(type: boolean): void
    setLoginType(loginType: LoginType): void
}

type Store = State & Action

const useSignType = create<Store>((set) => ({
    type: false,
    loginType: 'MAIN',
    setType: (type) => set({ type }),
    goLogin: () => set({ type: false }),
    goRegister: () => set({ type: true }),
    setMAIN: () => set({ loginType: 'MAIN' }),
    setOTHER: () => set({ loginType: 'OTHER' }),
    setRESET: () => set({ loginType: 'RESET' }),
    setLoginType: (loginType) => set({ loginType }),
}))

export default useSignType
