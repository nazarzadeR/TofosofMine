import React, { SVGAttributes } from 'react'

type Props = TDetailedComponentWithRef<
    {
        viewBox: string
    },
    SVGAttributes<SVGElement>
>

export type TChildrenIconProps = Omit<Props, 'viewBox'>

const AbstractIcon: React.FC<Props> = ({ children, ...rest }) => (
    <svg
        width='1em'
        height='1em'
        strokeWidth='0'
        fill='currentColor'
        stroke='currentColor'
        {...rest}
    >
        {children && children}
    </svg>
)

export default AbstractIcon
