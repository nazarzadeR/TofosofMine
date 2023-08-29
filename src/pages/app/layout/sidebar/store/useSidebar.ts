import { create } from 'zustand'

type State = {
    isOpen: boolean
    isGloballyOpened: boolean
}

type Actions = {
    setOpen(open: boolean): void
    setOpenGlobally(open: boolean): void
}

type Store = State & Actions

const useSetting = create<Store>((set) => ({
    isOpen: false,
    isGloballyOpened: false,
    setOpen: (isOpen) => set({ isOpen }),
    setOpenGlobally: (open) => set({ isOpen: open, isGloballyOpened: open }),
}))

export default useSetting
