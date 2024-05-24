import CoinList from '@/features/coins/CoinList'
import LastUpdated from '@/features/coins/LastUpdated'
import { Coin } from '@/features/coins/types'
import {
    getCoinsMarketData,
    loadPinnedCoinsFromLocalStorage,
    savePinnedCoinsToLocalStorage,
} from '@/service/CoinService'
import { useEffect, useState } from 'react'

const CURRENCY = 'usd'
const COINS_COUNT = 100
const POLLING_INTERVAL = 60000 // 60 seconds

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [coinList, setCoinList] = useState<Coin[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

    useEffect(() => {
        async function fetchCoins() {
            setIsLoading(true)
            const coins = await getCoinsMarketData(CURRENCY, COINS_COUNT)
            // add local index to every coin
            const coinsWithIndex = coins.map((coin, index) => ({
                ...coin,
                index,
            }))

            // load pinned coins from local storage
            const pinnedCoins = loadPinnedCoinsFromLocalStorage()
            const coinsWithPinned = coinsWithIndex
                .map((coin) => ({
                    ...coin,
                    isPinned: pinnedCoins.includes(coin.id),
                }))
                .sort((a, b) => {
                    if (a.isPinned !== b.isPinned) {
                        return a.isPinned ? -1 : 1
                    }
                    return a.index - b.index
                })

            setLastUpdated(new Date())
            setIsLoading(false)
            setCoinList(coinsWithPinned)
        }
        fetchCoins()
        const intervalId = setInterval(fetchCoins, POLLING_INTERVAL)

        return () => clearInterval(intervalId)
    }, [])

    const filteredCoinList = coinList.filter((coin) => {
        const coinName = coin.name.toLowerCase()
        const coinSymbol = coin.symbol.toLowerCase()
        const query = searchQuery.toLowerCase()

        // search by name and symbol
        return coinName.includes(query) || coinSymbol.includes(query)
    })

    function updateIsPinned(id: string, isPinned: boolean) {
        setCoinList((prevCoinList) => {
            const updatedCoinList = prevCoinList
                .map((coin) => (coin.id === id ? { ...coin, isPinned } : coin))
                .sort((a, b) => {
                    if (a.isPinned !== b.isPinned) {
                        return a.isPinned ? -1 : 1
                    }
                    return a.index - b.index
                })

            // save pinned coins to local storage
            const pinnedCoins = updatedCoinList
                .filter((coin) => coin.isPinned)
                .map((coin) => coin.id)
            savePinnedCoinsToLocalStorage(pinnedCoins)

            return updatedCoinList
        })
    }

    return (
        <div className="container flex flex-col items-center justify-center gap-4">
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
            <main className="flex w-full flex-col items-center justify-center gap-4">
                {isLoading && coinList.length === 0 ? (
                    <span className="text-white">Loading...</span>
                ) : (
                    <>
                        {lastUpdated && <LastUpdated date={lastUpdated} />}

                        <CoinList
                            updateIsPinned={updateIsPinned}
                            coinList={filteredCoinList}
                        />
                    </>
                )}
            </main>
        </div>
    )
}

export default HomePage
