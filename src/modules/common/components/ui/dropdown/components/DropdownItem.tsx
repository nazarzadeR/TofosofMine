import React from 'react'

type Props = TComponent<{
    LeftIcon?: React.ReactNode
    RightIcon?: React.ReactNode
    onClickEvent?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void
}>

const DropdownItem: React.FC<Props> = ({
    children,
    LeftIcon,
    RightIcon,
    onClickEvent,
}) => (
    <div
        onClick={onClickEvent}
        className='flex h-max min-h-[30px] w-full cursor-pointer items-center justify-center rounded p-2 text-lg hover:bg-light-primary hover:dark:bg-dark-primary'
    >
        <div className='flex h-full w-[20%] grow-[2] place-content-center place-items-center'>
            {LeftIcon && LeftIcon}
        </div>
        <div className='text-md flex h-full w-[70%] shrink-0 grow-[8] place-content-center place-items-center text-center'>
            {children && children}
        </div>
        <div className='flex h-full w-[20%] grow-[2] place-content-center place-items-center'>
            {RightIcon && RightIcon}
        </div>
    </div>
)

export default DropdownItem
