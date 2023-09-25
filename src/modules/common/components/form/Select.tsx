import React, { SelectHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { BackWardIcon } from '@modules/common'

type TValues = {
    value: any
    name: string
}

type Props = TDetailedComponentWithRef<
    {
        values?: TValues[]
        onSelect: (val: any) => void
    },
    SelectHTMLAttributes<HTMLSelectElement>
>

const SelectFiled: React.FC<Props> = ({
    values,
    onSelect,
    children,
    className = '',
    ...rest
}) => {
    const options =
        values &&
        values.map(({ value, name }: TValues) => (
            <option value={value}>{name}</option>
        ))

    return (
        <div
            role='group'
            className={twMerge(`relative mx-[5px] cursor-pointer`, className)}
        >
            <div className='relative h-max w-full cursor-pointer'>
                <select
                    onChange={(e) => onSelect(e.target.value)}
                    className='primary peer w-full cursor-pointer appearance-none rounded-sm p-3 outline outline-2 outline-gray-300  focus:outline-teal-400 dark:outline-dark-secondary'
                    {...rest}
                >
                    {children ? children : options && options}
                </select>
                <span className='absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-300 peer-focus:-rotate-90'>
                    <BackWardIcon />
                </span>
            </div>
        </div>
    )
}

export default SelectFiled
