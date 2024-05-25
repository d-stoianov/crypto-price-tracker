import { formatPrice } from '@/utils/strings'
import { CoinDetailsType } from '../types'
import PriceChange from '@/features/shared/PriceChange'

const CoinPriceDisplay = ({ coin }: { coin: CoinDetailsType }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <img width={35} src={coin.image} />
                <div className="flex items-center gap-2">
                    <h1 className="text-lg font-bold text-gray-200">
                        {coin.name}
                    </h1>
                    <p className="text-md text-slate-500">
                        ({coin.symbol.toUpperCase()})
                    </p>
                </div>
            </div>
            <div className="flex items-end gap-2">
                <p className="text-4xl text-white">
                    {formatPrice(coin.current_price)}
                </p>
                <PriceChange value={coin.price_change_percentage_24h} />
            </div>
        </div>
    )
}

export default CoinPriceDisplay
