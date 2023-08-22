import { useEffect, useState } from 'react'

import { on, off } from '@/util'

const useMedia = (mediaQuery: string | string[]) => {
    const queries = Array.isArray(mediaQuery) ? mediaQuery : [mediaQuery]

    const [matches, setMatches] = useState(() => {
        return queries.map((query, _) => ({
            media: query,
            matches: window.matchMedia(query).matches,
        }))
    })

    useEffect(() => {
        setMatches(
            queries.map((query) => ({
                media: query,
                matches: window.matchMedia(query).matches,
            }))
        )

        const queryListeners = queries.map((query) => window.matchMedia(query))

        const handleChange = (evt: MediaQueryListEvent) => {
            setMatches((prev) => {
                return prev.slice().map((i) => {
                    if (i.media === evt.media)
                        return { ...i, matches: evt.matches }
                    return i
                })
            })
        }

        queryListeners.forEach((q) => {
            on(q, 'change', handleChange)
        })

        return () => {
            queryListeners.forEach((q) => {
                off(q, 'change', handleChange)
            })
        }
    }, [])

    return matches.map((i) => i.matches)
}

export default useMedia
