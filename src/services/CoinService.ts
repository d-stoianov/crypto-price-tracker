import { CoinType } from '@/features/list/types'
import { CoinChartData, CoinDetailsType } from '@/features/chart/types'
import { CoinDetailsDTO, CoinDTO, CoinChartDataDTO } from './types'

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
): Promise<CoinType[]> {
    const response = await fetch(
        API_URL +
            `/coins/markets?vs_currency=${currency}&per_page=${count}&page=1`,
        options
    )
    const coins: CoinDTO[] = await response.json()
    return coins.map((coinDto) => mapCoinDTOToCoin(coinDto))
}

export async function getCoinDataById(
    coinId: string
): Promise<CoinDetailsType> {
    const response = await fetch(
        API_URL +
            `/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
        options
    )

    if (response.status === 404) {
        throw new Error('Coin not found')
    }

    const coinDTO: CoinDetailsDTO = await response.json()
    return mapCoinDetailsDTOToCoinDetails(coinDTO)
}

export async function getCoinChartPriceDataById(
    coinId: string,
    dateRange: {
        start: Date
        end: Date
    }
): Promise<CoinChartData> {
    const fromTimestamp = Math.floor(dateRange.start.getTime() / 1000)
    const toTimestamp = Math.floor(dateRange.end.getTime() / 1000)

    const response = await fetch(
        API_URL +
            `/coins/${coinId}/market_chart/range?vs_currency=usd&from=${fromTimestamp}&to=${toTimestamp}`,
        options
    )

    if (response.status === 404) {
        throw new Error('Coin not found')
    }

    const coinChartData: CoinChartDataDTO = await response.json()
    return mapCoinChartDataToCoinPriceData(coinChartData)
}

export function loadPinnedCoinsFromLocalStorage(): string[] {
    return JSON.parse(localStorage.getItem('pinnedCoins') ?? '[]')
}

export function savePinnedCoinsToLocalStorage(pinnedCoins: string[]): void {
    localStorage.setItem('pinnedCoins', JSON.stringify(pinnedCoins))
}

function mapCoinDTOToCoin(coinDTO: CoinDTO): CoinType {
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

function mapCoinDetailsDTOToCoinDetails(
    coinDTO: CoinDetailsDTO
): CoinDetailsType {
    return {
        id: coinDTO.id,
        name: coinDTO.name,
        image: coinDTO.image.large,
        symbol: coinDTO.symbol,
        current_price: coinDTO.market_data.current_price['usd'],
        price_change_percentage_24h:
            coinDTO.market_data.price_change_percentage_24h,
        total_supply: coinDTO.market_data.total_supply,
        max_supply: coinDTO.market_data.max_supply,
        total_volume: coinDTO.market_data.total_volume['usd'],
        market_cap: coinDTO.market_data.market_cap['usd'],
        description: coinDTO.description['en'],
    }
}

function mapCoinChartDataToCoinPriceData(
    coinChartDataDTO: CoinChartDataDTO
): CoinChartData {
    if (coinChartDataDTO.prices.length === 0) {
        return []
    }
    return coinChartDataDTO.prices.map((dataPointArray) => {
        return {
            y: new Date(dataPointArray[0]),
            x: dataPointArray[1],
        }
    })
}
