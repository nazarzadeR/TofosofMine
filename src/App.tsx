import React from 'react'

import AppRoutes from '@/setup/route-manager'
import AppProviders from '@/setup/context-manager'

const App: React.FC<TComponent> = () => (
    <AppProviders>
        <AppRoutes />
    </AppProviders>
)

export default App
