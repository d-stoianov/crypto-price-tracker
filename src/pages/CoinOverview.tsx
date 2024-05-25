import CoinChart from '@/features/chart/components'
import { CoinDetails } from '@/features/chart/types'
import { getCoinsDataById } from '@/services/CoinService'
import { formatPrice } from '@/utils/strings'
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
                    <main className="container mt-[1rem] flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <img width={35} src={coin.image} />
                                <div className="flex items-center gap-2">
                                    <h1 className="text-lg font-bold text-gray-200">
                                        {coin.name}
                                    </h1>
                                    <p className="text-md text-slate-500">
                                        ({coin.symbol.toUpperCase()})
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-end gap-2">
                                <p className="text-4xl text-white">
                                    {formatPrice(coin.current_price)}
                                </p>
                                <p className="text-2xl text-green-400">
                                    {coin.price_change_percentage_24h}%
                                </p>
                            </div>
                        </div>
                        <CoinChart />
                        <section className='flex flex-col gap-2'>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex w-full justify-between">
                                    <p className="text-lg text-white">
                                        Volume:
                                    </p>
                                    <p className="text-lg font-bold text-slate-300">
                                        {formatPrice(coin.total_volume)}
                                    </p>
                                </div>
                                <div className="flex w-full justify-between">
                                    <p className="text-lg text-white">
                                        Market cap:
                                    </p>
                                    <p className="text-lg font-bold text-slate-300">
                                        {formatPrice(coin.market_cap)}
                                    </p>
                                </div>
                                <div className="flex w-full justify-between">
                                    <p className="text-lg text-white">
                                        Market cap:
                                    </p>
                                    <p className="text-lg font-bold text-slate-300">
                                        {formatPrice(coin.market_cap)}
                                    </p>
                                </div>
                                <div className="flex w-full justify-between">
                                    <p className="text-lg text-white">
                                        Market cap:
                                    </p>
                                    <p className="text-lg font-bold text-slate-300">
                                        {formatPrice(coin.market_cap)}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 text-white">
                                <h1 className="text-2xl text-slate-400">
                                    About {coin.name} (
                                    {coin.symbol.toUpperCase()})
                                </h1>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: coin.description,
                                    }}
                                ></p>
                            </div>
                        </section>
                    </main>
                </>
            )}
        </>
    )
}

export default CoinOverview
