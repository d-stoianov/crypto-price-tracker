import useIsMobile from '@/hooks/useIsMobile'
import 'react-loading-skeleton/dist/skeleton.css'
import PinButton from './PinButton'
import { SkeletonCircle, SkeletonLine } from '@/features/shared/Skeleton'

const MobileItem = () => (
    <div className="flex h-[4rem] w-full justify-between rounded-3xl bg-slate-600 px-4 text-white transition duration-100 hover:bg-slate-500">
        <div className="flex h-full items-center gap-2">
            <SkeletonCircle size={45} />
            <div className="flex flex-col items-start">
                <SkeletonLine width={75} height={15} />
                <SkeletonLine width={50} height={15} />
            </div>
        </div>
    </div>
)

const DesktopItem = () => (
    <div className="grid h-[3rem] w-full grid-cols-6 place-items-center rounded-lg bg-slate-600 px-4 text-white transition duration-100 hover:bg-slate-500">
        <div className="formatLargeCurrency flex w-[8rem] items-center gap-2 text-start">
            <SkeletonCircle size={30} />
            <SkeletonLine width={75} height={20} />
        </div>
        <SkeletonLine width={50} height={20} />
        <SkeletonLine width={50} height={20} />
        <SkeletonLine width={75} height={20} />
        <SkeletonLine width={75} height={20} />
        <SkeletonLine width={75} height={20} />
    </div>
)

const CoinListSkeleton = () => {
    const isMobile = useIsMobile()
    const rows = Array.from({ length: 20 })

    return (
        <>
            <SkeletonLine width={200} height={20} />
            <section className="flex w-full flex-col gap-3">
                {!isMobile && (
                    <div className="mr-[3.5rem] grid h-[3rem] grid-cols-6 place-items-center rounded-t-lg bg-gray-800 px-4 font-bold text-white">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <SkeletonLine key={idx} width={100} height={20} />
                        ))}
                    </div>
                )}
                {rows.map((_, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        {isMobile ? <MobileItem /> : <DesktopItem />}
                        <PinButton
                            isDisabled={true}
                            onClick={() => {}}
                            isActive={false}
                        />
                    </div>
                ))}
            </section>
        </>
    )
}

export default CoinListSkeleton
