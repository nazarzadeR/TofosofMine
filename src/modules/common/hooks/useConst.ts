import { useRef } from 'react'

type Fn<T> = () => T

const useConst = <T = unknown>(init: T | Fn<T>): T => {
    const ref = useRef<T | null>(null)

    if (ref.current === null) {
        ref.current = typeof init === 'function' ? (init as Fn<T>)() : init
    }

    return ref.current as T
}

export default useConst
