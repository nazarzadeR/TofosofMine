import React, { useRef, useState, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { FieldHookConfig, useField } from 'formik'

import { useInputFocus, OpenEyeIcon, CloseEyeIcon } from '@modules/common'

type Props = TDetailedComponentWithRef<
    {
        pwd: boolean
        placeholder?: string
        Icon?: React.ComponentType
    },
    InputHTMLAttributes<HTMLInputElement>
> &
    FieldHookConfig<never>

const InputFiled: React.FC<Props> = ({
    Icon,
    pwd,
    placeholder,
    className = '',
    IconProps = {},
    ...rest
}) => {
    const [field, meta] = useField(rest)
    const [showPwd, setShowPwd] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    useInputFocus(inputRef, wrapperRef)

    const hasErr = meta.touched && meta.error
    const errorOutlined = hasErr ? 'input_error' : ''
    const changePassVisibility = () => setShowPwd((val) => !val)

    return (
        <div
            role='group'
            className={twMerge(`${errorOutlined} relative mx-[5px]`, className)}
        >
            <div
                ref={wrapperRef}
                className='secondary relative flex h-[48px] min-w-[260px] max-w-[320px] justify-between gap-0 rounded-md px-2 transition-[outline-color] duration-300'
            >
                {Icon && (
                    <div
                        className='flex h-[100%] w-[35px] flex-shrink-0 place-content-center place-items-center rounded-l-md text-center text-xl text-teal-500 opacity-70'
                        {...IconProps}
                    >
                        {Icon}
                    </div>
                )}
                <div className='relative w-full px-[10px]'>
                    <input
                        ref={inputRef}
                        autoComplete='off'
                        type={showPwd ? 'password' : 'text'}
                        className='secondary peer m-0 h-full w-full border-none p-0 pt-1 text-light-primary outline-none dark:text-dark-text'
                        {...field}
                        {...rest}
                    />
                    {meta.value.length <= 0 && placeholder && (
                        <label
                            htmlFor={rest.id || ''}
                            className='absolute left-[10px] top-[50%] -translate-y-1/2 cursor-text tracking-wide peer-focus-within:hidden'
                        >
                            {placeholder}
                        </label>
                    )}
                </div>
                {pwd && (
                    <div
                        onClick={changePassVisibility}
                        className='flex h-full w-[30px] flex-shrink-0 cursor-pointer place-content-center place-items-center rounded-r-md text-2xl text-teal-500 opacity-70'
                    >
                        {showPwd ? <OpenEyeIcon /> : <CloseEyeIcon />}
                    </div>
                )}
            </div>
            {hasErr && (
                <div className='mt-2 w-full max-w-[340px] p-0 pl-1 text-light-danger dark:text-dark-danger'>
                    <p className='h-full w-full overflow-hidden overflow-ellipsis whitespace-pre-wrap break-words text-justify text-xs tracking-wider'>
                        {meta.error}
                    </p>
                </div>
            )}
        </div>
    )
}

export default InputFiled
