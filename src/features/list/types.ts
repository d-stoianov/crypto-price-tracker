export type CoinType = {
    id: string
    index: number // local index
    name: string
    image: string
    symbol: string
    current_price: number
    price_change_percentage_24h: number
    total_volume: number
    market_cap: number
    isPinned: boolean
}
