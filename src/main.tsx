import React from 'react'
import ReactDOM from 'react-dom/client'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

import '@/lib/i18n'
import App from '@/App'
import '@/style/main.css'
import 'react-toastify/dist/ReactToastify.css'

if (import.meta.env.PROD) {
    disableReactDevTools()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
