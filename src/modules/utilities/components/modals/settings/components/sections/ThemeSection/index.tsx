import React from 'react'

import ThemeCard from './components/ThemeCard'

const ThemeSection = () => {
    return (
        <div className='flex h-full w-full'>
            <div className='mt-5 flex h-max w-full place-content-center place-items-center gap-4 max-sm:flex-col'>
                <ThemeCard
                    to='light'
                    name='light'
                    primaryClassName='bg-light-primary dark:text-black'
                    secondaryClassName='bg-light-secondary'
                />

                <ThemeCard
                    to='dark'
                    name='dark'
                    className='dark:border-dark-primary'
                    primaryClassName='bg-dark-primary text-white'
                    secondaryClassName='bg-dark-secondary dark:border-dark-primary'
                />
            </div>
        </div>
    )
}

export default ThemeSection
