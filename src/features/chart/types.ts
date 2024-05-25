export type CoinDetailsType = {
    id: string
    name: string
    image: string
    symbol: string
    current_price: number
    price_change_percentage_24h: number
    total_volume: number
    total_supply: number
    max_supply: number
    market_cap: number
    description: string
}

interface DataPoint {
    x: number
    y: Date
}

export type CoinChartData = DataPoint[]
