const CoinListHeader = () => {
    return (
        <div className="grid h-[3rem] w-full grid-cols-6 place-items-center rounded-t-lg bg-gray-800 px-4 font-bold text-white">
            <p className="col-span-1">Coin</p>
            <p className="col-span-1">Symbol</p>
            <p className="col-span-1">Price</p>
            <p className="col-span-1">Volume</p>
            <p className="col-span-1">24h Change</p>
            <p className="col-span-1">Market Cap</p>
        </div>
    )
}

export default CoinListHeader
