namespace AppContexts {
    type TGlobalContext = {
        isUp: boolean
        isMobileDevice: boolean
        screenSize: {
            isSM: boolean
            isMD: boolean
            isLG: boolean
            isXL: boolean
            isXXL: boolean
        }
        os?:
            | {
                  isMac: boolean
                  version: string
                  isLinux: boolean
                  isWindows: boolean
                  isFreeBSD: boolean
              }
            | ''
    }

    type ThemeOptions = 'light' | 'dark'
    type TThemeColors = {
        [K in ThemeOptions]: {
            default: string
            op25: string
        }
    }

    type TThemeContext = {
        theme: AppContexts.ThemeOptions
        changeMetaAttr(add: boolean): void
        setThemeTo(
            theme: AppContexts.ThemeOptions,
            isChangeAttrOp25?: boolean
        ): void
    }

    type TUtilityContext = {}
}
