import { useEffect, useState } from "react"
import Modal from "../components/Modal"
import {Text} from "../components/Text"
import Table from "../components/Table"
import { useSelector } from "react-redux"
import { IRootState } from "../store/store"
import { coinApi } from "../store/apis/coinsApi"
import { CoinType, PortfolioType } from "../utils/types"
import { formatCost } from "../utils/utilFuncs"
import { useQuery } from "@tanstack/react-query"
import { getMultipleCoinHistory } from "../api/coinApi"
import PortfolioRow from "./PortfolioRow"

export default function AssetsPortfolio () {

    const { data, isLoading } = coinApi.useFetchAllCoinsQuery("")
    const [fullPrice, setFullPrice] = useState("0")
    const [priceChange, setPriceChange] = useState("")
    const [priceChangeUsd, setPriceChangeUsd] = useState("")
    const portfolio = useSelector((state: IRootState) => state.portfolioReducer)
    const [usersCoinComps, setUsersCoinComps] = useState([<></>])
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleModalClick = () => {
        setIsModalVisible((prev: boolean) => !prev) 
    }
    const coinStory = useQuery({
        queryKey: ['storyCoins'],
        queryFn: () =>
            getMultipleCoinHistory(portfolio.map(({id}) => id), Date.now() - 8000000000, Date.now() - 7900000000)
    })

    

    useEffect(() => {

        if(data?.data && coinStory.data && portfolio.length > 0) {
            const portfolioData = data.data.filter((coin: CoinType) => 
                portfolio.map((item: PortfolioType) => item.id).includes(coin.id)).map((item, index) => Object.assign({}, item, {count: portfolio[index].count}))
            
            const currentFullPrice = portfolioData.map((item) => item.count*Number(item.priceUsd)).reduce((item, accumulator) => accumulator+item,0)
             
            setPriceChange(((currentFullPrice / coinStory.data.map((item:string, iterator:number) => 
                Number(item)*portfolioData[iterator].count).reduce((item, acc) => item+acc,0) - 1) * 100 ).toString())

            setPriceChangeUsd((currentFullPrice - coinStory.data.map((item:string, iterator:number) => 
                Number(item)*(portfolioData[iterator].count || 0)).reduce((item, acc) => item+acc,0)).toString())
            
            setFullPrice(formatCost(currentFullPrice.toString()))
            
            setUsersCoinComps(portfolioData.map((eqCoin: CoinType) => <PortfolioRow eqCoin={eqCoin} portfolio={portfolio} onModalClick={handleModalClick}></PortfolioRow>))
           
            
    }}, [data, isLoading, portfolio, coinStory.data])

     return (
        <>
        <div onClick={handleModalClick} className=' p-3 rounded-md border-borderColor border-[2px]  cursor-pointer' >
        <div><Text>Total balance:</Text>&nbsp;<Text>
            {fullPrice} USD
            </Text>&nbsp;
            <Text variant={Number(priceChangeUsd) > 0 ? 'priceUp' : 'priceDown'}>
            {formatCost(priceChangeUsd)} ({Number(priceChange) === Infinity ? "100" : Number(priceChange).toFixed(2)}%)
                            </Text>
                            </div>
        </div>
            <Modal isVisible={isModalVisible} 
                    onClick={handleModalClick}>
                        <div><Text>Total balance:</Text>&nbsp;
                        <Text>
                        {fullPrice} USD
                            </Text>&nbsp;<Text variant={Number(priceChangeUsd) > 0 ? 'priceUp' : 'priceDown'}>
            {formatCost(priceChangeUsd)} ({Number(priceChange) === Infinity ? "100" : Number(priceChange).toFixed(2)}%)
                            </Text>
                            </div>
                        <Table>
                             {usersCoinComps}
                        </Table>
            </Modal>
        </>
     )
}

