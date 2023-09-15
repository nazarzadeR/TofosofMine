import React from 'react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import {
    GlobalProvider,
    ThemeProvider,
    UtilityProvider,
} from '@/modules/common'

const queryClient = new QueryClient()

const AppProviders: React.FC<TComponent> = ({ children }) => (
    <BrowserRouter>
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <GlobalProvider>
                    <UtilityProvider>{children && children}</UtilityProvider>
                </GlobalProvider>
            </QueryClientProvider>
            <ToastContainer />
        </ThemeProvider>
    </BrowserRouter>
)

export default AppProviders
