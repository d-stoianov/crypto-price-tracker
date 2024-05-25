export interface CoinDTO {
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    market_cap: number
    market_cap_rank: number
    fully_diluted_valuation: number
    total_volume: number
    high_24h: number
    low_24h: number
    price_change_24h: number
    price_change_percentage_24h: number
    market_cap_change_24h: number
    market_cap_change_percentage_24h: number
    circulating_supply: number
    total_supply: number
    max_supply: number
    ath: number
    ath_change_percentage: number
    ath_date: string
    atl: number
    atl_change_percentage: number
    atl_date: string
    roi: any
    last_updated: string
}

export interface CoinDetailsDTO {
    id: string
    symbol: string
    name: string
    web_slug: string
    asset_platform_id: any
    platforms: { [key: string]: string }
    detail_platforms: any
    block_time_in_minutes: number
    hashing_algorithm: string
    categories: string[]
    preview_listing: boolean
    public_notice: any
    additional_notices: any[]
    description: {
        en: string
    }
    links: any
    image: {
        thumb: string
        small: string
        large: string
    }
    country_origin: string
    genesis_date: string
    sentiment_votes_up_percentage: number
    sentiment_votes_down_percentage: number
    watchlist_portfolio_users: number
    market_cap_rank: number
    status_updates: any[]
    last_updated: string
    market_data: {
        max_supply: number
        total_supply: number
        current_price: { [key: string]: number }
        total_volume: { [key: string]: number }
        market_cap: { [key: string]: number }
        price_change_percentage_24h: number
    }
}
