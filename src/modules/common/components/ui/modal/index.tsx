import React from 'react'

import MobileModal from './components/MobileModal'
import DesktopModal from './components/DesktopModal'

import { useGlobals } from '@/modules/common'

const Modal: React.FC<AppComponent.TAbstractModalProps> = (props) => {
    const {
        screenSize: { isSM },
    } = useGlobals()
    const Modal = isSM ? MobileModal : DesktopModal

    return <Modal {...props} />
}

export default Modal
