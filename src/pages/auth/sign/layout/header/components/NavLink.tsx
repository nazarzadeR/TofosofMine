import React from 'react'

const NavLink: React.FC<TComponent> = ({ children }) => {
    return <li className='h-full '>{children && children}</li>
}

export default NavLink
