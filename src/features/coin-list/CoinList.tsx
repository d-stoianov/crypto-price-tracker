import CoinItem from './CoinItem'
import CoinListHeader from './CoinListHeader'

const CoinList = ({ coinList }: { coinList: Coin[] }) => {
    return (
        <section className="flex w-full flex-col gap-2">
            <CoinListHeader />
            {coinList.map((coin, idx) => (
                <CoinItem key={idx} coin={coin} />
            ))}
        </section>
    )
}

export default CoinList
