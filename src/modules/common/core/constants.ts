export const LOCAL_STORAGE_KEY_OF_THEME = 'theme'
export const SUPPORTED_LANGS = ['en', 'az', 'ru'] as const

export const MEDIA_BREAKPOINTS = {
    MOBILE: '(min-width: 640px)',
    TABLET: '(min-width: 768px)',
    LAPTOP: '(min-width: 1024px)',
    DESKTOP: '(min-width: 1280px)',
    EXTRA: '(min-width: 1536px)',
    MAX_MOBILE: '(max-width: 640px)',
    MAX_TABLET: '(min-width: 641px) and (max-width: 768px)',
    MAX_LAPTOP: '(min-width: 769px) and (max-width: 1024px)',
    MAX_DESKTOP: '(min-width: 1025px) and (max-width: 1280px)',
} as const
