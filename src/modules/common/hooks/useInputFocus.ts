import { useEffect, useCallback } from 'react'

import { on, off } from '@modules/common'

type InputRefType = React.MutableRefObject<HTMLInputElement | null>
type WrapperRefType = React.MutableRefObject<HTMLDivElement | null>

const useInputFocus = (inputRef: InputRefType, wrapperRef: WrapperRefType) => {
    const handleFocus = useCallback(() => {
        if (wrapperRef.current && inputRef.current) {
            wrapperRef.current.classList.add('input_focus')
            inputRef.current.classList.add(
                '!bg-light-primary',
                'dark:!bg-dark-primary'
            )
        }
    }, [wrapperRef, inputRef])

    const handleBlur = useCallback(() => {
        if (wrapperRef.current && inputRef.current) {
            wrapperRef.current.classList.remove(
                'input_focus',
                '!bg-light-primary',
                'dark:!bg-dark-primary'
            )
            inputRef.current.classList.remove(
                '!bg-light-primary',
                'dark:!bg-dark-primary'
            )
        }
    }, [wrapperRef, inputRef])

    const changeClassList = useCallback(
        (className: string, operation: 'add' | 'remove' = 'add') => {
            if (wrapperRef.current)
                wrapperRef.current.classList[operation](className)
        },
        [wrapperRef]
    )

    useEffect(() => {
        const current = inputRef.current

        if (current) {
            on(current, 'focus', handleFocus)
            on(current, 'blur', handleBlur)
        }

        return () => {
            if (current) {
                off(current, 'focus', handleFocus)
                off(current, 'blur', handleBlur)
            }
        }
    }, [inputRef, handleFocus, handleBlur])

    return changeClassList
}

export default useInputFocus
