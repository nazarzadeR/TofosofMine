import React, { Suspense } from 'react'

import PageLoader from './loaders/PageLoader'

type Props = TComponent<{
    comp?: React.ReactNode
    fallback?: React.ReactNode
}>

const SuspenseLoader: React.FC<Props> = ({
    comp,
    children,
    fallback = <PageLoader />,
}) => (
    <Suspense fallback={fallback}>
        {children ? children : comp ? comp : null}
    </Suspense>
)

export default SuspenseLoader
