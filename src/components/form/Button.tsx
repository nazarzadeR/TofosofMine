import React, { ButtonHTMLAttributes } from 'react'
import Tippy from '@tippyjs/react'

type Props = TDetailedComponent<
    {
        tooltip?: string
        loading?: boolean
        Loader?: React.ReactNode
        variant?: 'success' | 'warning' | 'danger' | 'info'
    },
    ButtonHTMLAttributes<HTMLButtonElement>
>

const Button: React.FC<Props> = ({
    Loader,
    children,
    variant,
    tooltip,
    className = '',
    loading = false,
    ...rest
}) => {
    const showTooltip =
        tooltip === undefined ? (
            tooltip
        ) : (
            <div className='rounded-md bg-teal-500 px-1 py-[2px] text-sm'>
                {tooltip}
            </div>
        )

    return (
        <Tippy content={showTooltip}>
            <span className='flex min-h-[35px] min-w-[60px] place-content-center place-items-center'>
                <button
                    data-type={variant}
                    data-tooltip-content={tooltip}
                    data-tooltip-id='button-tooltip'
                    className='min-w-p[60px] secondary hover:perspective-[500px] transform-[preserve-3d] min-h-[35px] w-[80%] cursor-pointer select-none rounded-md border-none px-[1rem]
                    py-[.6rem] text-center text-[1.1rem] text-light-text decoration-transparent duration-100 backface-hidden hover:scale-105 dark:text-dark-text'
                    {...rest}
                >
                    {!loading ? (
                        children && children
                    ) : Loader ? (
                        Loader
                    ) : (
                        // <SimpleLoader />
                        <></>
                    )}
                </button>
            </span>
        </Tippy>
    )
}

export default Button
