import axios from "axios"
import { COIN_API_URL } from "../utils/configs"

export const getCurrentCoin = async (id: string) => {
    return  (await axios.get(COIN_API_URL + "/" + id)).data.data
}