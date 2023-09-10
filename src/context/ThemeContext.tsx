import { useState, useContext, createContext, PropsWithChildren } from 'react'

import { LOCAL_STORAGE_KEY_OF_THEME } from '@/data/constants'
import {
    changeThemeAttr,
    getLocalStorageItem,
    setValueToLocalStorage,
    changeHeaderThemeColorAttr,
    getDefaultBrowserThemePreference,
} from '@/util'

export const themeColors: AppContexts.TThemeColors = {
    dark: {
        default: '#303642',
        op25: '#131821',
    },
    light: {
        default: '#F4F6F8',
        op25: '#b7b7b7',
    },
}

const defaultStore = {} as AppContexts.TThemeContext
const defaultThemePreference: AppContexts.ThemeOptions =
    getDefaultBrowserThemePreference()
const selectedThemePreference: AppContexts.ThemeOptions =
    getLocalStorageItem(LOCAL_STORAGE_KEY_OF_THEME) || defaultThemePreference

const ThemeContext = createContext<AppContexts.TThemeContext>(defaultStore)

export function ThemeProvider(props: PropsWithChildren) {
    const [theme, setTheme] = useState(initialize)

    function initialize() {
        changeThemeAttr(selectedThemePreference)
        changeHeaderThemeColorAttr(themeColors[selectedThemePreference].default)

        return selectedThemePreference
    }

    function setThemeTo(
        newTheme: AppContexts.ThemeOptions,
        isChangeAttrOp25 = false
    ) {
        const attrOp = isChangeAttrOp25 ? 'op25' : 'default'

        setTheme(() => newTheme)
        changeThemeAttr(newTheme)
        changeHeaderThemeColorAttr(themeColors[newTheme][attrOp])
        setValueToLocalStorage(LOCAL_STORAGE_KEY_OF_THEME, newTheme)
    }

    function changeMetaAttr(add = true) {
        const op = add ? 'op25' : 'default'

        changeHeaderThemeColorAttr(themeColors[theme][op])
    }

    return (
        <ThemeContext.Provider value={{ theme, setThemeTo, changeMetaAttr }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
