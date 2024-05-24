import { useParams } from 'react-router-dom'

const CoinOverview = () => {
    const { coinId } = useParams()

    return <div className="text-white">{coinId}</div>
}

export default CoinOverview
