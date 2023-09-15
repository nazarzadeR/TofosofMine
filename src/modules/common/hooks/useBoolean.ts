import { useState, useMemo } from 'react'

type State = boolean | (() => boolean)

const useBoolean = (initial: State = false) => {
    const [state, setState] = useState(initial)

    const updatedFuncs = useMemo(
        () => ({
            on: () => setState(() => true),
            off: () => setState(() => false),
            toggle: () => setState((prev) => !prev),
        }),
        []
    )

    return [state, updatedFuncs] as const
}

export default useBoolean
