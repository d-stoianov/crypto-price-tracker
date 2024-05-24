import useIsMobile from '@/hooks/useIsMobile'

const MobileItem = ({ coin }: { coin: Coin }) => {
    return (
        <div className="flex h-[4rem] w-full justify-between rounded-3xl bg-slate-600 px-4 text-white">
            <div className="flex h-full items-center gap-2">
                <div>
                    <img width={45} src={coin.image} />
                </div>
                <div className="flex flex-col">
                    <p>{coin.name}</p>
                    <p className="">{coin.symbol.toUpperCase()}</p>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <p>{`$${coin.current_price.toLocaleString()}`}</p>
                {Math.sign(coin.price_change_percentage_24h) === -1 ? (
                    <p className="col-span-1 text-red-400">{`${coin.price_change_percentage_24h.toFixed(2)}%`}</p>
                ) : (
                    <p className="col-span-1 text-green-400">{`+${coin.price_change_percentage_24h.toFixed(2)}%`}</p>
                )}{' '}
            </div>
        </div>
    )
}

const DesktopItem = ({ coin }: { coin: Coin }) => {
    return (
        <div className="grid h-[3rem] w-full grid-cols-6 place-items-center rounded-lg bg-slate-600 px-4 text-white">
            <div className="col-span-1 flex w-[8rem] items-center gap-2">
                <img width={30} src={coin.image} />
                <p>{coin.name}</p>
            </div>
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

    return isMobile ? <MobileItem coin={coin} /> : <DesktopItem coin={coin} />
}

export default CoinItem
