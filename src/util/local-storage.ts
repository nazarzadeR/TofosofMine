import { isBrowser } from './dom'

export function getDefaultBrowserThemePreference() {
    if (
        isBrowser &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )
        return 'dark'

    return 'light'
}

export function setLocalStorageToValue(
    key: string,
    value: string,
    force = true
) {
    const hasKey = !!localStorage.getItem(key)

    if (hasKey && !force) return

    if (typeof value !== 'string') {
        value = JSON.stringify(value)
    }

    localStorage.setItem(key, value)
}

export function getLocalStorageItem(key: string, parse = false) {
    const item = localStorage.getItem(key)

    if (item === null) return undefined

    if (!parse) return item

    return JSON.parse(item as string)
}
