import { useTheme } from '@/modules/common'
import React from 'react'

import { twMerge } from 'tailwind-merge'

type Props = TComponent<{
    to: AppContexts.ThemeOptions
    name: string
    className?: string
    primaryClassName?: string
    secondaryClassName?: string
}>

const ThemeCard: React.FC<Props> = ({
    to,
    name,
    className = '',
    primaryClassName = '',
    secondaryClassName = '',
}) => {
    const { theme, setThemeTo } = useTheme()

    const setTheme = () => setThemeTo(to)
    const isMainTheme = theme === to ? 'bg-teal-500' : ''

    return (
        <div
            onClick={setTheme}
            className={twMerge(
                'flex h-[100px] w-[90%]  max-w-[360px] cursor-pointer flex-col  rounded-md border transition-transform hover:scale-105 sm:max-w-[200px]',
                className
            )}
        >
            <div
                className={twMerge(
                    'flex min-h-[40px] w-full items-center rounded-t-md',
                    primaryClassName
                )}
            >
                <p className='ml-2 text-sm text-inherit capitalize'>{name}</p>
            </div>
            <div
                className={twMerge(
                    'flex h-full  w-full border-spacing-px rounded-b-md',
                    secondaryClassName
                )}
            >
                <span className='flex w-[15%] items-center justify-center'>
                    <span
                        className={twMerge(
                            'mb-5 block h-[10px] w-[10px] rounded-full border',
                            isMainTheme
                        )}
                    />
                </span>
                <span className='flex w-[85%] flex-col gap-2 pl-2 pt-3'>
                    <span className='block h-[10px] w-[80%] animate-pulse rounded-sm bg-gray-400' />
                    <span className='block h-[10px] w-[60%] animate-pulse rounded-sm bg-gray-400' />
                </span>
            </div>
        </div>
    )
}

export default ThemeCard
