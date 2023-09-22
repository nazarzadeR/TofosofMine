import React from 'react'

import NavLink from './components/NavLink'
import SignAuthDropdown from './components/SignAuthDropdown'

const Header = () => (
    <header className='m-auto flex h-full max-h-[60px] w-full max-w-[1280px] items-center justify-between p-4'>
        <h2 className='text:text h-full text-xl md:text-2xl'>TodosOfMine</h2>
        <nav className='flex h-full w-min items-center justify-center'>
            <ul className='bg-red flex w-full gap-2'>
                <NavLink>
                    <SignAuthDropdown />
                </NavLink>
            </ul>
        </nav>
    </header>
)

export default Header
