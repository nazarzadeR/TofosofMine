import React, { useContext, useMemo } from 'react'

import useUp from './hook/useUp'
import {
    useMedia,
    detectOSInfo,
    MEDIA_BREAKPOINTS,
    detectMobileDevice,
} from '@modules/common'

const defaultGlobal = {} as AppContexts.TGlobalContext
const GlobalContext =
    React.createContext<AppContexts.TGlobalContext>(defaultGlobal)

export function GlobalProvider({ children }: TComponent) {
    const isUp = useUp()
    const os = useMemo(detectOSInfo, [])
    const isMobileDevice = useMemo(detectMobileDevice, [])
    const [isSM, isMD, isLG, isXL, isXXL] = useMedia([
        MEDIA_BREAKPOINTS.MOBILE,
        MEDIA_BREAKPOINTS.TABLET,
        MEDIA_BREAKPOINTS.LAPTOP,
        MEDIA_BREAKPOINTS.DESKTOP,
        MEDIA_BREAKPOINTS.EXTRA,
    ])

    return (
        <GlobalContext.Provider
            value={{
                os,
                isUp,
                isMobileDevice,
                screenSize: {
                    isSM,
                    isMD,
                    isLG,
                    isXL,
                    isXXL,
                },
            }}
        >
            {children && children}
        </GlobalContext.Provider>
    )
}

export const useGlobals = () => useContext(GlobalContext)
