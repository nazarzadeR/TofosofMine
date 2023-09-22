import React from 'react'

import { SettingsModal } from '..'
import { useBoolean } from '@modules/common'

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

            <SettingsModal
                isOpen={isSettingModalOpen}
                onClose={settingModalActon.off}
            />
        </UtilityContext.Provider>
    )
}

export const useUtility = () => React.useContext(UtilityContext)
