import React from 'react'

import AppPage from './AppPage'
import Sidebar from './layout/sidebar'

const App = () => (
    <div className='flex h-full w-full relative'>
        <Sidebar />
        <main className='flex-1'>
            <AppPage />
        </main>
    </div>
)

export default App
