import useIsMobile from '@/hooks/useIsMobile'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PinButton from './PinButton'

const MobileItem = () => {
    return (
        <div className="flex h-[4rem] w-full justify-between rounded-3xl bg-slate-600 px-4 text-white transition duration-100 hover:bg-slate-500">
            <div className="flex h-full items-center gap-2">
                <div>
                    <Skeleton
                        enableAnimation
                        circle={true}
                        height={45}
                        width={45}
                    />
                </div>
                <div className="flex flex-col items-start">
                    <Skeleton enableAnimation width={75} height={15} />
                    <Skeleton enableAnimation width={50} height={15} />
                </div>
            </div>
        </div>
    )
}

const DesktopItem = () => {
    return (
        <div className="grid h-[3rem] w-full grid-cols-6 place-items-center rounded-lg  bg-slate-600 px-4 text-white transition duration-100 hover:bg-slate-500">
            <div className="formatLargeCurrency flex w-[8rem] items-center gap-2 text-start">
                <Skeleton
                    enableAnimation
                    circle={true}
                    height={30}
                    width={30}
                />
                <Skeleton enableAnimation width={75} height={20} />
            </div>
            <Skeleton enableAnimation width={50} height={20} />
            <Skeleton enableAnimation width={50} height={20} />
            <Skeleton enableAnimation width={75} height={20} />
            <Skeleton enableAnimation width={75} height={20} />
            <Skeleton enableAnimation width={75} height={20} />
        </div>
    )
}

const CoinListSkeleton = () => {
    const rows = Array(20).fill(null)
    const isMobile = useIsMobile()

    return (
        <>
            <Skeleton enableAnimation width={200} height={20} />
            <section className="flex w-full flex-col gap-3">
                {!isMobile && (
                    /* header */
                    <div className="mr-[3.5rem] grid h-[3rem] grid-cols-6 place-items-center rounded-t-lg bg-gray-800 px-4 font-bold text-white">
                        <Skeleton enableAnimation width={100} height={20} />
                        <Skeleton enableAnimation width={100} height={20} />
                        <Skeleton enableAnimation width={100} height={20} />
                        <Skeleton enableAnimation width={100} height={20} />
                        <Skeleton enableAnimation width={100} height={20} />
                        <Skeleton enableAnimation width={100} height={20} />
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
