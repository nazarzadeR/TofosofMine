import React from 'react'

import AppPage from './AppPage'
import Sidebar from './layout/sidebar'

const App = () => (
    <div className='relative flex h-full w-full'>
        <Sidebar />
        <main className='flex-1'>
            <AppPage />
        </main>
    </div>
)

export default App
