import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

AxiosInstance.defaults.validateStatus = () => true

export default AxiosInstance
