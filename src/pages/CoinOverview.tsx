import CoinChart from '@/features/chart/components'
import CoinDescription from '@/features/chart/components/CoinDescription'
import CoinPriceDisplay from '@/features/chart/components/CoinHeader'
import CoinStatsPanel from '@/features/chart/components/CoinStatsPanel'
import { CoinDetailsType } from '@/features/chart/types'
import { getCoinsDataById } from '@/services/CoinService'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CoinOverview = () => {
    const { coinId } = useParams()
    const [coin, setCoin] = useState<CoinDetailsType | null>(null)
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
                    <main className="container mt-[1rem] flex flex-col gap-4">
                        <CoinPriceDisplay coin={coin} />
                        <CoinChart />
                        <CoinStatsPanel coin={coin} />
                        <CoinDescription
                            title={`About ${coin.name}`}
                            description={coin.description}
                        />
                    </main>
                </>
            )}
        </>
    )
}

export default CoinOverview
