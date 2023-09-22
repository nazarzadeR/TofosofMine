import { mode } from 'crypto-js'
import { create } from 'zustand'

export type TSettingMode = 'MAIN' | 'THEME' | 'LANG'

type State = {
    mode: TSettingMode
}

type Action = {
    setMode(mode: TSettingMode): void
}

type Store = State & Action

export const useSettingModal = create<Store>((set) => ({
    mode: 'THEME',
    setMode: (mode) => set({ mode }),
}))
