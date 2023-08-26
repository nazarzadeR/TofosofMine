import React from 'react'

import Sidebar from './layout/sidebar'
import AppRoutes from '@/setup/route-manager'

const App: React.FC<TComponent> = () => (
    <div className='app'>
        <Sidebar />
        <main className='content'>
            <AppRoutes />
        </main>
    </div>
)

export default App
