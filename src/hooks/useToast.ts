import { ToastOptions, ToastContent, toast, Zoom } from 'react-toastify'

const useToast = () => {
    const defaultProps: ToastOptions = {
        transition: Zoom,
        draggable: true,
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'colored',
        position: 'top-right',
        hideProgressBar: false,
        className: 'toast',
    }

    const success = (message?: ToastContent<unknown>, props?: ToastOptions) =>
        toast.success(message, {
            ...defaultProps,
            ...props,
        })

    const error = (message?: ToastContent<unknown>, props?: ToastOptions) =>
        toast.error(message, {
            ...defaultProps,
            ...props,
        })

    const warning = (message?: ToastContent<unknown>, props?: ToastOptions) =>
        toast.warning(message, {
            ...defaultProps,
            ...props,
        })

    const info = (message?: ToastContent<unknown>, props?: ToastOptions) =>
        toast.info(message, {
            ...defaultProps,
            ...props,
        })

    return { success, error, warning, info }
}

export default useToast
