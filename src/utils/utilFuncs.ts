import { CoinType } from "./types"

const BILLION = 1000000000;
const MILLION = 1000000;
const THOUSAND = 1000;

export const formatCost = (cost: string) => {
    let text = "";
    let item = Number(cost)
    if (item < 0) {
      item *= -1;
    }
    if (item / BILLION > 1) {
      text +=
        (Number(item) / BILLION).toFixed(2).toString() + "b";
      return text;
    }
    if (item / MILLION > 1) {
      text +=
        (Number(item) / MILLION).toFixed(2).toString() + "m";
      return text;
    }
    if (item / THOUSAND > 1) {
      text +=
        (Number(item) / THOUSAND).toFixed(2).toString() + "k";
      return text;
    }
    if (item <= 10 / BILLION) {
      text +=
        (Number(item) * BILLION).toFixed(2).toString() + "e-9";
      return text;
    }
    if (item <= 10 / MILLION) {
      text +=
        (Number(item) * THOUSAND).toFixed(2).toString() + "e-6";
      return text;
    }
    if (item <= 10 / THOUSAND) {
      text +=
        (Number(item) * THOUSAND).toFixed(2).toString() + "e-3";
      return text;
    }
    return item.toFixed(2).toString();
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