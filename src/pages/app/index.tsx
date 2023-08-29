import React from 'react'

import AppPage from './AppPage'
import Sidebar from './layout/sidebar'

const App = () => (
    <div className='app'>
        <Sidebar />
        <main className='content'>
            <AppPage />
        </main>
    </div>
)

export default App
