import { useGlobals } from '@/modules/common/contexts'
import { useAuthStore } from '@modules/authentication'

const useSidebarShow = () => {
    const { hasMeta, isPersisting } = useAuthStore()
    const {
        screenSize: { isSM },
    } = useGlobals()

    return !isSM || isPersisting || !hasMeta('username')
}

export default useSidebarShow
