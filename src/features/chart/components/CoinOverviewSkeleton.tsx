import { SkeletonCircle, SkeletonLine } from '@/features/shared/Skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CoinOverviewSkeleton = () => {
    const statsPanelRows = Array(3).fill(null)

    return (
        <>
            {/* Coin price display */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <SkeletonCircle size={35} />
                    <div className="flex items-center gap-2">
                        <SkeletonLine width={150} height={28} />
                        <SkeletonLine width={50} height={28} />
                    </div>
                </div>
                <div className="flex items-end gap-2">
                    <SkeletonLine width={160} height={40} />
                    <SkeletonLine width={85} height={24} />
                </div>
            </div>
            {/* Coin chart */}
            <SkeletonLine height={200} />
            {/* Coin stats panel */}
            {statsPanelRows.map((_, idx) => (
                <SkeletonLine key={idx} height={40} />
            ))}
            {/* Coin description */}
            <SkeletonLine height={250} />
        </>
    )
}

export default CoinOverviewSkeleton
