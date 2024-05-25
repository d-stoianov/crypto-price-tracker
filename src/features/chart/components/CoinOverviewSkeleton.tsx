import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CoinOverviewSkeleton = () => {
    const statsPanelRows = Array(3).fill(null)

    return (
        <>
            {/* Coin price display */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Skeleton
                        enableAnimation
                        circle={true}
                        height={35}
                        width={35}
                    />
                    <div className="flex items-center gap-2">
                        <Skeleton enableAnimation width={150} height={28} />
                        <Skeleton enableAnimation width={50} height={28} />
                    </div>
                </div>
                <div className="flex items-end gap-2">
                    <Skeleton enableAnimation width={160} height={40} />
                    <Skeleton enableAnimation width={85} height={24} />
                </div>
            </div>
            {/* Coin chart */}
            <Skeleton enableAnimation height={155} />
            {/* Coin stats panel */}
            {statsPanelRows.map((_, idx) => (
                <Skeleton key={idx} enableAnimation height={40} />
            ))}
            {/* Coin description */}
            <Skeleton enableAnimation height={300} />
        </>
    )
}

export default CoinOverviewSkeleton
