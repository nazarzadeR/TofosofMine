import { isBrowser } from 'framer-motion'

export function loginWithGithub() {
    const githubCLientID = import.meta.env.VITE_GITHUB_CLIENT_ID
    if (isBrowser) {
        window.location.assign(
            `https://github.com/login/oauth/authorize?client_id=${githubCLientID}`
        )
    }
}
