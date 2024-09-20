import { Text } from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { ClickHandlerType, CoinType } from "../utils/types";
import { formatCost } from "../utils/utilFuncs";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addCoin } from "../store/slice/portfolioSlice";

interface CoinModalProps {
    isVisible: boolean,
    onModalClick: ClickHandlerType,
    coin?: CoinType
}
const CoinModal: React.FC<CoinModalProps> = ({ isVisible, onModalClick, coin }) => {

    const [count, setCount] = useState("")
    const dispatch = useDispatch()

    const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(Number(e.target.value) < 0)
            return;
        if(e.target.value.length > 3)
            return;
        setCount(e.target.value)
    }
    const handleAddClick = (e: SyntheticEvent) => {
        dispatch(addCoin(Object.assign({}, coin, { count: Number(count)})))
        onModalClick(e)
    }

    return (
        <Modal isVisible={isVisible} onClick={(e:SyntheticEvent) => {onModalClick(e)}}>
                    <div className=" flex flex-col items-center gap-3">
                        <img src={`https://assets.coincap.io/assets/icons/${coin?.symbol.toLocaleLowerCase()}@2x.png`} className="w-10"></img>
                        <Text>{coin?.symbol || "Not Found"}</Text>
                    </div>
                    <section className=" flex gap-3 items-center flex-col sm:flex-row">
                        <Text variant='utility'>{coin && formatCost(coin?.priceUsd.toString()) || "Not found"}</Text>
                        <Input type="number" onChange={handleCountChange} value={count} placeholder="0"></Input>
                        <Button onClick={handleAddClick}><Text>Add</Text></Button>
                    </section>
            </Modal>
    )
}

export default CoinModal