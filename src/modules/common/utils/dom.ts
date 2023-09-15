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

export function detectOSInfo() {
    if (!hasNavigator) return

    const OSVariantsOfSystems = {
        apple: ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        freeBSD: ['FreeBSD', 'FreeBSD i386', 'FreeBSD amd64'],
        windows: ['OS/2', 'Pocket PC', 'Windows', 'Win16', 'Win32', 'WinCE'],
        linux: [
            'Linux',
            'Linux aarch64',
            'Linux armv5tejl',
            'Linux armv6l',
            'Linux armv7l',
            'Linux armv8l',
            'Linux i686',
            'Linux i686 on x86_64',
            'Linux i686 X11',
            'Linux MSM8960_v3.2.1.1_N_R069_Rev:18',
            'Linux ppc64',
            'Linux x86_64',
            'Linux x86_64 X11',
        ],
    }

    const os = navigator?.platform
    const osInfo = {
        version: os,
        isMac: OSVariantsOfSystems.apple.some((keys) => os === keys),
        isLinux: OSVariantsOfSystems.linux.some((keys) => os === keys),
        isWindows: OSVariantsOfSystems.windows.some((keys) => os === keys),
        isFreeBSD: OSVariantsOfSystems.freeBSD.some((keys) => os === keys),
    }

    return os && osInfo
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
