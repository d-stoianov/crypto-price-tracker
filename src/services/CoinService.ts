import { Coin } from '@/features/list/types'
import { CoinDetails } from '@/features/chart/types'
import { CoinDetailsDTO, CoinDTO } from './types'

const API_URL = 'https://api.coingecko.com/api/v3'
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': import.meta.env.VITE_API_KEY,
    },
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

export async function getCoinsDataById(coinId: string): Promise<CoinDetails> {
    const response = await fetch(
        API_URL +
            `/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
        options
    )

    if (response.status === 404) {
        throw new Error('Coin not found')
    }

    const coinDTO: CoinDetailsDTO = await response.json()
    return mapCoinDetailsDTOToCoin(coinDTO)
}

export function loadPinnedCoinsFromLocalStorage(): string[] {
    return JSON.parse(localStorage.getItem('pinnedCoins') ?? '[]')
}

export function savePinnedCoinsToLocalStorage(pinnedCoins: string[]): void {
    localStorage.setItem('pinnedCoins', JSON.stringify(pinnedCoins))
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
        index: -1,
        isPinned: false,
    }
}

function mapCoinDetailsDTOToCoin(coinDTO: CoinDetailsDTO): CoinDetails {
    return {
        id: coinDTO.id,
        name: coinDTO.name,
        image: coinDTO.image.large,
        symbol: coinDTO.symbol,
        current_price: coinDTO.market_data.current_price['usd'],
        price_change_percentage_24h:
            coinDTO.market_data.price_change_percentage_24h,
        total_volume: coinDTO.market_data.total_volume['usd'],
        market_cap: coinDTO.market_data.market_cap['usd'],
        description: coinDTO.description['en'],
    }
}
