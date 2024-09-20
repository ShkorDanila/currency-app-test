import { CoinType } from "./types"

export const formatCost = (cost: string) => {
    const formatted = Number(cost).toFixed(0)
    if(Number(formatted) >= 1000000000) {
        return formatted.slice(0, formatted.length-9) + "." + formatted.slice(-9).slice(0,2) + "b"
    }
    if(Number(formatted) >= 1000000) {
        return formatted.slice(0, formatted.length-6) + "." + formatted.slice(-6).slice(0,2) + "m"
    }
    if(Number(formatted) >= 1000) {
        return formatted.slice(0, formatted.length-3) + "." + formatted.slice(-3).slice(0,2) + "k"
    }
    return Number(Number(cost).toFixed(2)).toString()
}

export const normalizeText = (text: string) => {
    return text.toLowerCase().trim()
}

export const priceComparator = (coinA: CoinType, coinB: CoinType) => {
    return Number(coinA.priceUsd) - Number(coinB.priceUsd)
}

export const priceComparatorDesc = (coinA: CoinType, coinB: CoinType) => {
    return Number(coinB.priceUsd) - Number(coinA.priceUsd)
}

export const marketCapComparator = (coinA: CoinType, coinB: CoinType) => {
    return Number(coinA.marketCapUsd) - Number(coinB.marketCapUsd)
}

export const marketCapComparatorDesc = (coinA: CoinType, coinB: CoinType) => {
    return Number(coinB.marketCapUsd) - Number(coinA.marketCapUsd)
}

export const rateComparator = (coinA: CoinType, coinB: CoinType) => {
    return Number(coinA.changePercent24Hr) - Number(coinB.changePercent24Hr)
}

export const rateComparatorDesc = (coinA: CoinType, coinB: CoinType) => {
    return Number(coinB.changePercent24Hr) - Number(coinA.changePercent24Hr)
}

export const getChartConfig = (categoryData: number[], seriesData: number[]) => {
    return ({
        options: {
          chart: {
            id: "price-bar"
          },
          xaxis: {
            categories: categoryData,
            labels: {
              show: false,
            }
          },
        },
        series: [
          {
            name: "price",
            data: seriesData
          }
        ],
        stroke: {
          curve: 'smooth',
        },
        dataLabels: {
          enabled: false,
        },
      })
}