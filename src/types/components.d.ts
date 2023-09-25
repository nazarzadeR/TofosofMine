namespace AppComponent {
    type TAbstractModalProps = TDetailedComponent<{
        onClose(): void
        isOpen: boolean
        MobileTitle?: string
        addDesktopClassName?: string
        addOverlayClassName?: string
        MobileLeftCornerComp?: React.ReactNode
    }>
}
