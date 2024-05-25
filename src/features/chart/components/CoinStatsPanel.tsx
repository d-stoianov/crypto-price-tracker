import { formatPrice } from '@/utils/strings'
import { CoinDetailsType } from '../types'

const StatsItem = ({ title, value }: { title: string; value: number }) => {
    return (
        <div className="flex w-full justify-between rounded-sm bg-slate-600 p-2 px-4">
            <p className="text-lg text-white">{title}</p>
            {value && (
                <p className="text-lg font-bold text-white">
                    {formatPrice(value)}
                </p>
            )}
        </div>
    )
}

const CoinStatsPanel = ({ coin }: { coin: CoinDetailsType }) => {
    return (
        <section className="flex flex-col gap-2">
            <div className="flex flex-col items-center gap-2">
                <StatsItem title="Total volume" value={coin.total_volume} />
                <StatsItem title="Market cap" value={coin.market_cap} />
                <StatsItem title="Total supply" value={coin.total_supply} />
                {coin.max_supply && (
                    <StatsItem title="Max supply" value={coin.max_supply} />
                )}
            </div>
        </section>
    )
}

export default CoinStatsPanel
