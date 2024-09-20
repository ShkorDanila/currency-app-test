import { useEffect, useState } from "react"
import Modal from "../../components/Modal"
import {Text} from "../../components/Text"
import Table from "../../components/Table"
import { useSelector } from "react-redux"
import { IRootState } from "../../store/store"
import { CoinTypeStrict } from "../../utils/types"
import { formatCost } from "../../utils/utilFuncs"
import PortfolioCoin from "./PortflioCoin"

export default function AssetsPortfolio () {

    const portfolioCoins = useSelector((state: IRootState) => state.portfolioReducer.items)
    const currentPortfolio = useSelector((state: IRootState) => state.currentPortfolioReducer.items)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleModalClick = () => {
        setIsModalVisible(!isModalVisible)
    }
    useEffect(() => {
        console.log(portfolioCoins);
        
    }, [isModalVisible])

    const getPercent = (first: number[], last: number[]) => {
        if(first.length === 0 || last.length === 0)
            return <Text variant='utility'>0%</Text>;

        const firstSum = first.reduce((acc, price) => acc+price, 0)
        const lastSum = last.reduce((acc, price) => acc+price, 0)
        const res = (firstSum-lastSum)/firstSum * 100
        return  <Text variant={res > 0 ? 'priceUp' : (res < 0 ? 'priceDown' : 'utility')}>{res > 0 ? `+${res.toFixed(2)}%` : `-^${res.toFixed(2)}%`}</Text>
    }

     return (
        <>
        <section onClick={handleModalClick} className=' p-3 rounded-md border-borderColor border-[2px]  cursor-pointer' >
        <div><Text>Total balance:</Text>&nbsp;<Text>
            {formatCost(portfolioCoins.reduce((accum:number, coin: CoinTypeStrict) => accum+Number(coin.priceUsd)*coin.count, 0).toString())} USD
            </Text>&nbsp;
            <Text>{getPercent(portfolioCoins.map((item) => Number(item.priceUsd)), currentPortfolio.map((item) => Number(item.priceUsd)))}</Text>
                            </div>
        </section>
            <Modal isVisible={isModalVisible} 
                    onClick={handleModalClick}>
                        <Table>
                        {portfolioCoins.length === 0 ? <Text>No coins</Text> : portfolioCoins.map(({id, count}) => (
                            <PortfolioCoin key={Math.random()} count={Number(count)} coinId={id} />
                        ))}
                        </Table>
            </Modal>
        </>
     )
}

