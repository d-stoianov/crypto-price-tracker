import Skeleton from 'react-loading-skeleton'

export const SkeletonCircle = ({ size }: { size: number }) => (
    <Skeleton
        baseColor="#cbd5e1"
        enableAnimation
        circle={true}
        height={size}
        width={size}
    />
)

export const SkeletonLine = ({
    width,
    height,
}: {
    width?: number
    height?: number
}) => (
    <Skeleton
        baseColor="#cbd5e1"
        enableAnimation
        width={width}
        height={height}
    />
)
