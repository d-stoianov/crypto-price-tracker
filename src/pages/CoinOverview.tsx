import CoinChart from '@/features/chart/components'
import { CoinDetails } from '@/features/chart/types'
import { getCoinsDataById } from '@/services/CoinService'
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
    }, [coinId])

    return (
        <>
            {error ? (
                <span className="container flex justify-center text-white">
                    {error}
                </span>
            ) : coin === null ? (
                <span className="container flex justify-center text-white">
                    Loading...
                </span>
            ) : (
                <>
                    <header className="flex w-full justify-center pt-4">
                        <div className="flex items-center justify-center gap-4">
                            <img width={40} src={coin.image} />
                            <h1 className="text-center text-3xl text-white">
                                {coin.name}
                            </h1>
                        </div>
                    </header>
                    <main className="container mt-[1rem] flex flex-col">
                        <CoinChart />
                    </main>
                </>
            )}
        </>
    )
}

export default CoinOverview
