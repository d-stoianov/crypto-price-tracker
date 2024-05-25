import useIsMobile from '@/hooks/useIsMobile'
import { CoinType } from '../types'
import { useNavigate } from 'react-router-dom'
import PinButton from './PinButton'
import { formatPrice, formatLargeCurrency } from '@/utils/strings'

interface ItemProps {
    coin: CoinType
    onClick: () => void
}

const MobileItem: React.FC<ItemProps> = ({ coin, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex h-[4rem] w-full justify-between rounded-3xl bg-slate-600 px-4 text-white transition duration-100 hover:bg-slate-500"
        >
            <div className="flex h-full items-center gap-2">
                <div>
                    <img width={45} src={coin.image} />
                </div>
                <div className="flex flex-col items-start">
                    <p className="max-w-[8rem] truncate">{coin.name}</p>
                    <p>{coin.symbol.toUpperCase()}</p>
                </div>
            </div>
            <div className="flex h-full flex-col justify-center">
                <p className="col-span-1">{formatPrice(coin.current_price)}</p>
                {Math.sign(coin.price_change_percentage_24h) === -1 ? (
                    <p className="col-span-1 text-red-400">{`${coin.price_change_percentage_24h.toFixed(2)}%`}</p>
                ) : (
                    <p className="col-span-1 text-green-400">{`+${coin.price_change_percentage_24h.toFixed(2)}%`}</p>
                )}{' '}
            </div>
        </button>
    )
}

const DesktopItem: React.FC<ItemProps> = ({ coin, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="grid h-[3rem] w-full grid-cols-6 place-items-center rounded-lg  bg-slate-600 px-4 text-white transition duration-100 hover:bg-slate-500"
        >
            <div className="col-span-1 flex w-[8rem] items-center gap-2 text-start">
                <img width={30} src={coin.image} />
                <p className="truncate">{coin.name}</p>
            </div>
            <p className="col-span-1">{coin.symbol.toUpperCase()}</p>
            <p className="col-span-1">{formatPrice(coin.current_price)}</p>
            <p className="col-span-1">
                {formatLargeCurrency(coin.total_volume)}
            </p>
            {Math.sign(coin.price_change_percentage_24h) === -1 ? (
                <p className="col-span-1 text-red-400">{`${coin.price_change_percentage_24h.toFixed(2)}%`}</p>
            ) : (
                <p className="col-span-1 text-green-400">{`+${coin.price_change_percentage_24h.toFixed(2)}%`}</p>
            )}
            <p className="col-span-1">{`${formatLargeCurrency(coin.market_cap)}`}</p>
        </button>
    )
}

const CoinItem = ({
    coin,
    updateIsPinned,
}: {
    coin: CoinType
    updateIsPinned: (id: string, isPinned: boolean) => void
}) => {
    const isMobile = useIsMobile()
    const navigate = useNavigate()

    return (
        <div className="flex items-center gap-2">
            {isMobile ? (
                <MobileItem
                    onClick={() => navigate(`/${coin.id}`)}
                    coin={coin}
                />
            ) : (
                <DesktopItem
                    onClick={() => navigate(`/${coin.id}`)}
                    coin={coin}
                />
            )}
            <PinButton
                isActive={coin.isPinned}
                onClick={() => updateIsPinned(coin.id, !coin.isPinned)}
            />
        </div>
    )
}

export default CoinItem
