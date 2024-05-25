export const formatWithLeadingZeros = (number: number): string => {
    return number.toString().padStart(2, '0')
}

export const formatPrice = (num: number): string => {
    const options: Intl.NumberFormatOptions = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: num > 1 ? 0 : 6,
        maximumFractionDigits: num > 1 ? 2 : 6,
    }

    return num.toLocaleString('en-US', options)
}

export const formatLargeCurrency = (num: number): string => {
    let formattedNumber: string

    if (num >= 1e9) {
        formattedNumber = (num / 1e9).toFixed(2).replace(/\.00$/, '') + 'B'
    } else if (num >= 1e6) {
        formattedNumber = (num / 1e6).toFixed(2).replace(/\.00$/, '') + 'M'
    } else if (num >= 1e3) {
        formattedNumber = (num / 1e3).toFixed(2).replace(/\.00$/, '') + 'K'
    } else {
        formattedNumber = num.toString()
    }

    return '$' + formattedNumber
}
