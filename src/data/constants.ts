export const LOCAL_STORAGE_KEY_OF_THEME = 'theme'
export const SUPPORTED_LANGS = ['en', 'az', 'ru'] as const

export const MEDIA_BREAKPOINTS = {
    MOBILE: '(max-width: 480px)',
    TABLET: '(min-width: 480px) and (max-width: 768px)',
    LAPTOP: '(min-width: 768px) and (max-width: 1024px)',
    DESKTOP: '(min-width: 1024px) and (max-width: 1216px)',
    EXTRA: '(min-width: 1216px)',
} as const

export enum Roles {
    USER = 2021,
    ADMIN = 'ADMIN',
    SUPER_USER = 'SUPER_USER',
}
