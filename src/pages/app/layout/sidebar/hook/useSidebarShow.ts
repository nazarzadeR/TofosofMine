import useAuth from '@/store/auth'
import { useGlobals } from '@/context'

const useSidebarShow = () => {
    const { hasMeta, isPersisting } = useAuth()
    const {
        screenSize: { isSM },
    } = useGlobals()

    return !isSM || isPersisting || !hasMeta('username')
}

export default useSidebarShow
