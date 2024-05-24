import { CoinDetails } from '@/features/coins/types'
import { getCoinsDataById } from '@/service/CoinService'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CoinOverview = () => {
    const { coinId } = useParams()
    const [coin, setCoin] = useState<CoinDetails | null>(null)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        async function fetchCoinData() {
            if (coinId) {
                try {
                    const coinData = await getCoinsDataById(coinId)
                    if (coinData) {
                        setCoin(coinData)
                    }
                } catch (error) {
                    if (error instanceof Error) {
                        setError(error.message)
                    }
                }
            }
        }
        fetchCoinData()
    }, [])

    return (
        <div className="container flex flex-col items-center justify-center gap-8">
            {error ? (
                <span className="text-white">{error}</span>
            ) : coin === null ? (
                <span className="text-white">Loading...</span>
            ) : (
                <>
                    <header className="flex h-full items-center gap-4">
                        <img width={40} src={coin.image} />
                        <h1 className="text-center text-3xl text-white">
                            {coin.name}
                        </h1>
                    </header>
                    <main className="w-full"></main>
                </>
            )}
        </div>
    )
}

export default CoinOverview
