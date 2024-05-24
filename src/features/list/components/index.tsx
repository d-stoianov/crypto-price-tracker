import useIsMobile from '@/hooks/useIsMobile'
import CoinItem from './CoinItem'
import CoinListHeader from './CoinListHeader'
import { Coin } from '../types'

interface CoinListProps {
    coinList: Coin[]
    updateIsPinned: (id: string, isPinned: boolean) => void
}

const CoinList: React.FC<CoinListProps> = ({ coinList, updateIsPinned }) => {
    const isMobile = useIsMobile()

    return (
        <section className="flex w-full flex-col gap-3">
            {!isMobile && <CoinListHeader />}
            {coinList.map((coin, idx) => (
                <CoinItem
                    updateIsPinned={updateIsPinned}
                    key={idx}
                    coin={coin}
                />
            ))}
        </section>
    )
}

export default CoinList
