import axios from "axios"
import { COIN_API_URL } from "../utils/configs"

export const getCurrentCoin = async (id: string) => {
    return  (await axios.get(COIN_API_URL + "/" + id)).data.data
}

export const getCurrentCoinHistory = async (id: string, start: number, end: number, interval: string) => {
    return  (await axios.get(COIN_API_URL + "/" + id + `/history?start=${start}&end=${end}&interval=${interval}`)).data.data
}

export const getMultipleCoinHistory = async (ids: string[], start: number, end: number) => {
    
    const promiseList = ids.map((id) => 
         axios.get(COIN_API_URL + "/" + id + `/history?start=${start}&end=${end}&interval=d1`)
    )

    return Promise.all(promiseList).then((data) => data.map(({data}) => data.data[0].priceUsd))
}
