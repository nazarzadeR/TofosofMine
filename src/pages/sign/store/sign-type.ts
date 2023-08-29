import { create } from 'zustand'

type Store = {
    type: boolean
    goLogin(): void
    goRegister(): void
    setType(type: boolean): void
}

const useSignType = create<Store>((set) => ({
    type: false,
    setType: (type) => set({ type }),
    goLogin: () => set({ type: false }),
    goRegister: () => set({ type: true }),
}))

export default useSignType
