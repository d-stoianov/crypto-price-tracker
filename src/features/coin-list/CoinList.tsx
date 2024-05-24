import useIsMobile from '@/hooks/useIsMobile'
import CoinItem from './CoinItem'
import CoinListHeader from './CoinListHeader'
import { Coin } from './types'

const CoinList = ({ coinList }: { coinList: Coin[] }) => {
    const isMobile = useIsMobile()

    return (
        <section className="flex w-full flex-col gap-2">
            {!isMobile && <CoinListHeader />}
            {coinList.map((coin, idx) => (
                <CoinItem key={idx} coin={coin} />
            ))}
        </section>
    )
}

export default CoinList
