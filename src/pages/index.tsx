import CoinList from '@/features/coin-list/CoinList'

const coinList: Coin[] = [
    {
        name: 'Bitcoin',
        symbol: 'btc',
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
        current_price: 67456,
        price_change_percentage_24h: 111,
        total_volume: 39891546137,
        market_cap: 458636859966,
    },
    {
        name: 'Ethereum',
        symbol: 'eth',
        image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
        current_price: 67456,
        price_change_percentage_24h: 42,
        total_volume: 39891546137,
        market_cap: 531636859966.51,
    },
]

const HomePage = () => {
    return (
        <div className="container flex flex-col items-center justify-center gap-8">
            <header className="flex h-full w-[20rem] flex-col items-center gap-4">
                <h1 className="text-center text-3xl text-white">
                    Crypto Price Tracker
                </h1>
                <input
                    className="h-[2rem] w-full rounded-lg px-2 placeholder:text-gray-400 focus:outline-none"
                    placeholder="Search Crypto"
                />
            </header>
            <main className="w-full">
                <CoinList coinList={coinList} />
            </main>
        </div>
    )
}

export default HomePage
