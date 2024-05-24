const CoinItem = ({ coin }: { coin: Coin }) => {
    return (
        <div className="grid h-[3rem] w-full grid-cols-6 px-4 place-items-center rounded-lg bg-slate-600 text-white">
            <div className="col-span-1 flex w-[8rem] items-center gap-2">
                <img width={30} src={coin.image} />
                <p>{coin.name}</p>
            </div>
            <p className="col-span-1">{coin.symbol.toUpperCase()}</p>

            <p className="col-span-1">{`$${coin.current_price.toLocaleString()}`}</p>
            <p className="col-span-1">{`$${coin.total_volume.toLocaleString()}`}</p>
            <p className="col-span-1 text-green-300">{`+${coin.price_change_percentage_24h.toFixed(2)}%`}</p>
            <p className="col-span-1">{`$${coin.market_cap.toLocaleString()}`}</p>
        </div>
    )
}

export default CoinItem
