import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/lib/i18n'
import App from '@/App'
import '@/style/main.scss'

import AppProviders from '@/setup/context-manager'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppProviders>
            <App />
        </AppProviders>
    </React.StrictMode>
)
