import { Coin } from '@/features/coin-list/types'
import { CoinDTO } from './types'

const API_URL = 'https://api.coingecko.com/api/v3'
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': import.meta.env.VITE_API_KEY,
    },
}

function mapCoinDTOToCoin(coinDTO: CoinDTO): Coin {
    return {
        id: coinDTO.id,
        name: coinDTO.name,
        image: coinDTO.image,
        symbol: coinDTO.symbol,
        current_price: coinDTO.current_price,
        price_change_percentage_24h: coinDTO.price_change_percentage_24h,
        total_volume: coinDTO.total_volume,
        market_cap: coinDTO.market_cap,
    }
}

export async function getCoinsMarketData(
    currency: string = 'usd',
    count: number = 5
): Promise<Coin[]> {
    const response = await fetch(
        API_URL +
            `/coins/markets?vs_currency=${currency}&per_page=${count}&page=1`,
        options
    )
    const coins: CoinDTO[] = await response.json()
    return coins.map((coinDto) => mapCoinDTOToCoin(coinDto))
}
