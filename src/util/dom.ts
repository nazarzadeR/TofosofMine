export const pass = () => null
export const hasBrowser = typeof window !== 'undefined'
export const hasDocument = typeof document !== 'undefined'
export const hasNavigator = typeof navigator !== 'undefined'
export const hasLocation = typeof window.location !== 'undefined'

export function changeHeaderThemeColorAttr(hexColor: string) {
    const metaTag = document.querySelector('meta[name="theme-color"]')

    if (metaTag) {
        metaTag.setAttribute('content', hexColor)
    }
}

export function changeThemeAttr(theme: string) {
    if (!hasDocument) return

    document.documentElement.setAttribute('class', theme)
}

export function getSearchParamsFromUrl(param: string) {
    if (!hasLocation) return

    const query = window.location.search
    const urlParams = new URLSearchParams(query)
    const codeParam = urlParams.get(param)

    return codeParam
}

export function detectMobileDevice() {
    if (!hasNavigator) return false

    const mobileDeviceKeywords = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
    ]

    return mobileDeviceKeywords.some((keywords) =>
        navigator.userAgent.match(keywords)
    )
}

export function on<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T,
    ...args:
        | Parameters<T['addEventListener']>
        | [string, (...arg: readonly any[]) => void | null, ...any]
): void {
    if (obj && 'addEventListener' in obj)
        obj.addEventListener(
            ...(args as Parameters<HTMLElement['addEventListener']>)
        )
}

export function off<T extends Window | HTMLElement | Document | EventTarget>(
    obj: T,
    ...args:
        | Parameters<T['removeEventListener']>
        | [string, (...arg: readonly any[]) => void | null, ...any]
): void {
    if (obj && 'removeEventListener' in obj)
        obj.removeEventListener(
            ...(args as Parameters<HTMLElement['removeEventListener']>)
        )
}
