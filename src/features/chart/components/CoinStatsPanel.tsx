import { formatPrice } from '@/utils/strings'
import { CoinDetailsType } from '../types'

const CoinStatsPanel = ({ coin }: { coin: CoinDetailsType }) => {
    return (
        <section className="flex flex-col gap-2">
            <div className="flex flex-col items-center gap-2">
                <div className="flex w-full justify-between">
                    <p className="text-lg text-white">Volume:</p>
                    <p className="text-lg font-bold text-slate-300">
                        {formatPrice(coin.total_volume)}
                    </p>
                </div>
                <div className="flex w-full justify-between">
                    <p className="text-lg text-white">Market cap:</p>
                    <p className="text-lg font-bold text-slate-300">
                        {formatPrice(coin.market_cap)}
                    </p>
                </div>
                <div className="flex w-full justify-between">
                    <p className="text-lg text-white">Total supply:</p>
                    <p className="text-lg font-bold text-slate-300">
                        {formatPrice(coin.total_supply)}
                    </p>
                </div>
                <div className="flex w-full justify-between">
                    <p className="text-lg text-white">Max supply:</p>
                    <p className="text-lg font-bold text-slate-300">
                        {formatPrice(coin.max_supply)}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CoinStatsPanel
