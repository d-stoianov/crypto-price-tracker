import CoinList from '@/features/coins/CoinList'
import { Coin } from '@/features/coins/types'
import { getCoinsMarketData } from '@/service/CoinService'
import { useEffect, useState } from 'react'

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [coinList, setCoinList] = useState<Coin[]>([])
    const [filteredCoinList, setFilteredCoinList] = useState<Coin[]>(coinList)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        async function fetchCoins() {
            setIsLoading(true)
            const coins = await getCoinsMarketData('usd', 100)
            setIsLoading(false)
            setCoinList(coins)
            setFilteredCoinList(coins)
        }
        fetchCoins()
    }, [])

    useEffect(() => {
        const filtered = coinList.filter((coin) => {
            const coinName = coin.name.toLowerCase()
            const coinSymbol = coin.symbol.toLowerCase()

            // search by name and symbol
            if (coinName.includes(searchQuery.toLowerCase())) {
                return true
            }
            if (coinSymbol.includes(searchQuery.toLowerCase())) {
                return true
            }
            return false
        })
        setFilteredCoinList(filtered)
    }, [searchQuery])

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
                    <CoinList coinList={filteredCoinList} />
                )}
            </main>
        </div>
    )
}

export default HomePage
