import React from 'react'

// import { SettingModal } from '@/components'
import useBoolean from '@/hooks/useBoolean'

const defaultContext = {} as AppContexts.TUtilityContext
const UtilityContext =
    React.createContext<AppContexts.TUtilityContext>(defaultContext)

export const UtilityProvider: React.FC<TComponent> = ({ children }) => {
    const [isSettingModalOpen, settingModalActon] = useBoolean(false)

    return (
        <UtilityContext.Provider
            value={{
                setting: settingModalActon,
            }}
        >
            {children && children}

            {/* <SettingModal
                isOpen={isSettingModalOpen}
                onClose={settingModalActon.off}
            /> */}
        </UtilityContext.Provider>
    )
}

export const useUtility = () => React.useContext(UtilityContext)
