import CoinList from '@/features/coins/CoinList'
import { Coin } from '@/features/coins/types'
import { getCoinsMarketData } from '@/service/CoinService'
import { useEffect, useState } from 'react'

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [coinList, setCoinList] = useState<Coin[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        async function fetchCoins() {
            setIsLoading(true)
            const coins = await getCoinsMarketData('usd', 100)
            setIsLoading(false)
            setCoinList(coins)
        }
        fetchCoins()
    }, [])

    const filteredCoinList = coinList.filter((coin) => {
        const coinName = coin.name.toLowerCase()
        const coinSymbol = coin.symbol.toLowerCase()
        const query = searchQuery.toLowerCase()

        // search by name and symbol
        return coinName.includes(query) || coinSymbol.includes(query)
    })

    function updateIsPinned(id: string, isPinned: boolean) {
        setCoinList((prevCoinList) =>
            prevCoinList
                .map((coin) => (coin.id === id ? { ...coin, isPinned } : coin))
                .sort((a, b) =>
                    a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1
                )
        )
    }

    return (
        <div className="container flex flex-col items-center justify-center gap-8">
            <header className="flex h-full w-[20rem] flex-col items-center gap-4">
                <h1 className="text-center text-3xl text-white">
                    Crypto Price Tracker
                </h1>
                <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-[2rem] w-full rounded-lg px-2 placeholder:text-gray-400 focus:outline-none"
                    placeholder="Search Crypto"
                />
            </header>
            <main className="w-full">
                {isLoading ? (
                    <span className="flex justify-center text-white">
                        Loading...
                    </span>
                ) : (
                    <CoinList
                        updateIsPinned={updateIsPinned}
                        coinList={filteredCoinList}
                    />
                )}
            </main>
        </div>
    )
}

export default HomePage
