export const sidebarOpenAnimation: TAnimation = {
    initial: {
        width: '70px',
        transition: {
            duration: 0.4,
            ease: 'easeInOut',
        },
    },
    open: {
        width: '280px',
        transition: {
            duration: 0.4,
            ease: 'easeInOut',
        },
    },
}

export const animatedTextAnimation: Record<string, TAnimation> = {
    child: {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    },
    container: {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.01 * i },
        }),
    },
}

export const pageLoaderAnimation = {
    boxShadow: [
        '0.2em 0px 0 0px currentcolor',
        '0.2em 0.2em 0 0 currentcolor',
        '0 0.2em 0 0px currentcolor',
        '-0.2em 0.2em 0 0 currentcolor',
        '-0.2em 0 0 0 currentcolor',
        '-0.2em -0.2em 0 0 currentcolor',
        '0px -0.2em 0 0 currentcolor',
        '0.2em -0.2em 0 0 currentcolor',
        '0.2em 0px 0 0px currentcolor',
    ],
    transition: {
        duration: 1,
        ease: 'linear',
        repeat: Infinity,
    },
}
