import useIsMobile from '@/hooks/useIsMobile'
import { Coin } from './types'
import { useNavigate } from 'react-router-dom'
import PinButton from './PinButton'

interface ItemProps {
    coin: Coin
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
                    <p>{coin.name}</p>
                    <p>{coin.symbol.toUpperCase()}</p>
                </div>
            </div>
            <div className="flex h-full flex-col justify-center">
                <p>{`$${coin.current_price.toLocaleString()}`}</p>
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
        <div className="grid h-[3rem] w-full grid-cols-6 place-items-center rounded-lg  bg-slate-600 px-4 text-white transition duration-100 hover:bg-slate-500">
            <button
                onClick={onClick}
                className="col-span-1 flex w-[8rem] items-center gap-2 text-start hover:underline"
            >
                <img width={30} src={coin.image} />
                <p>{coin.name}</p>
            </button>
            <p className="col-span-1">{coin.symbol.toUpperCase()}</p>

            <p className="col-span-1">{`$${coin.current_price.toLocaleString()}`}</p>
            <p className="col-span-1">{`$${coin.total_volume.toLocaleString()}`}</p>
            {Math.sign(coin.price_change_percentage_24h) === -1 ? (
                <p className="col-span-1 text-red-400">{`${coin.price_change_percentage_24h.toFixed(2)}%`}</p>
            ) : (
                <p className="col-span-1 text-green-400">{`+${coin.price_change_percentage_24h.toFixed(2)}%`}</p>
            )}
            <p className="col-span-1">{`$${coin.market_cap.toLocaleString()}`}</p>
        </div>
    )
}

const CoinItem = ({ coin }: { coin: Coin }) => {
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
            <PinButton onClick={() => console.log(`pin ${coin.id}`)} />
        </div>
    )
}

export default CoinItem
