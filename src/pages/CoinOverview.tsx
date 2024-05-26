import CoinChart from '@/features/chart/components'
import CoinDescription from '@/features/chart/components/CoinDescription'
import CoinPriceDisplay from '@/features/chart/components/CoinPriceDisplay'
import CoinOverviewSkeleton from '@/features/chart/components/CoinOverviewSkeleton'
import CoinStatsPanel from '@/features/chart/components/CoinStatsPanel'
import { CoinChartData, CoinDetailsType } from '@/features/chart/types'
import {
    getCoinDataById,
    getCoinChartPriceDataById,
} from '@/services/CoinService'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ErrorPage from './ErrorPage'

const today = new Date()
const oneYearBack = new Date()
oneYearBack.setFullYear(today.getFullYear() - 1)

const CoinOverview = () => {
    const { coinId } = useParams()
    const [coinDetailsData, setCoinDetailsData] =
        useState<CoinDetailsType | null>(null)
    const [coinChartData, setCoinChartData] = useState<CoinChartData | null>(
        null
    )
    const [error, setError] = useState<string>('')

    useEffect(() => {
        async function fetchCoinData() {
            if (coinId) {
                try {
                    const promises: [
                        Promise<CoinDetailsType>,
                        Promise<CoinChartData>,
                    ] = [
                        getCoinDataById(coinId),
                        getCoinChartPriceDataById(coinId, {
                            start: oneYearBack,
                            end: today,
                        }),
                    ]

                    const [coinDetailsData, coinChartData] =
                        await Promise.all(promises)

                    if (coinDetailsData) {
                        setCoinDetailsData(coinDetailsData)
                    }

                    if (coinChartData) {
                        setCoinChartData(coinChartData)
                    }

                    console.log(coinChartData)
                } catch (error) {
                    if (error instanceof Error) {
                        setError(error.message)
                    }
                }
            }
        }
        fetchCoinData()
    }, [coinId])

    if (error) {
        return <ErrorPage message={error} />
    }

    const isLoading = !coinDetailsData || !coinChartData

    return (
        <main className="container mt-[1rem] flex flex-col gap-4">
            {isLoading ? (
                <CoinOverviewSkeleton />
            ) : (
                <>
                    <CoinPriceDisplay coin={coinDetailsData} />
                    <CoinChart chartData={coinChartData} />
                    <CoinStatsPanel coin={coinDetailsData} />
                    {coinDetailsData.description.length > 0 && (
                        <CoinDescription
                            title={`About ${coinDetailsData.name}`}
                            description={coinDetailsData.description}
                        />
                    )}
                </>
            )}
        </main>
    )
}

export default CoinOverview
