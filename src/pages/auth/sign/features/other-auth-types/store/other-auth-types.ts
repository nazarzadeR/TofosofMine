import { create } from 'zustand'

export type TOtherAuth = 'MAGIC' | 'GOOGLE' | 'GITHUB' | 'ALL'

type Store = {
    type: TOtherAuth
    setType(type: TOtherAuth): void
}

const useOtherAuthType = create<Store>((set) => ({
    type: 'ALL',
    setType: (type) => set({ type }),
}))

export default useOtherAuthType
