import { useParams } from 'react-router-dom'

const CoinOverview = () => {
    const { coinId } = useParams()

    return (
        <div className="container flex flex-col items-center justify-center gap-8">
            <header className="flex h-full w-[20rem] flex-col items-center gap-4">
                <h1 className="text-center text-3xl text-white">{coinId}</h1>
            </header>
            <main className="w-full"></main>
        </div>
    )
}

export default CoinOverview
