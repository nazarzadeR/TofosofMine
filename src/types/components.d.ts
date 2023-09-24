namespace AppComponent {
    type TAbstractModalProps = TDetailedComponent<{
        onClose(): void
        isOpen: boolean
        addDesktopClassName?: string
        addOverlayClassName?: string
        MobileLeftCornerComp?: React.ReactNode
    }>
}
