import { SyntheticEvent, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Option from "../components/Option";
import Table from "../components/Table";
import TableRow from "../components/TableRow";
import { Text } from "../components/Text";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

export default function CoinTablePage () {

    const [isCoinModalOpened, setIsCoinModalOpened] = useState(false)
    const navigate = useNavigate()

    const handleCoinModalClick = (e: SyntheticEvent) => {
        setIsCoinModalOpened((prev: boolean) => !prev);
        e.stopPropagation()
    }

    const handleCoinClick = (e: SyntheticEvent) => {
        navigate(`/${1}`)
    }


    return (
        <>
        <div className="h-full w-full flex flex-col items-center gap-7 ">
            <div className="flex items-center gap-5 flex-col sm:flex-row">
                <Input className=" w-full sm:w-fit" placeholder="Search"></Input>
                <div className="flex items-center gap-3 h-full">
                    <Text>Sort By: </Text>
                    <Option options={["First", "Second"]}></Option>
                </div>
            </div>
            <Table>
                <TableRow onClick={handleCoinClick} className="justify-evenly cursor-pointer">
                    <div>
                        <img src="https://assets.coincap.io/assets/icons/btc@2x.png" className="w-8"></img>
                        <Text>BTC</Text>
                    </div>
                    <Text>$ 0.00</Text>
                    <Text>$ 00000</Text>
                    <Text variant='priceUp'>2.5%</Text>
                    <Button onClick={handleCoinModalClick}><Text variant='utility'>Add</Text></Button>
                </TableRow>
            </Table>
            <div className=" flex items-center gap-4">
                <Button className=" w-24"><Text variant='utility'>Previous</Text></Button>
                <Button className=" w-24"><Text variant='utility'>Next</Text></Button>
            </div>
            
            <Modal isVisible={isCoinModalOpened} 
                    onClick={handleCoinModalClick}
                    >
                    <div className=" flex flex-col items-center gap-3">
                        <img src="https://assets.coincap.io/assets/icons/btc@2x.png" className="w-10"></img>
                        <Text>BTC</Text>
                    </div>
                    <div className=" flex gap-3 items-center">
                        <Text variant='utility'>0.00 $</Text>
                        <Input placeholder="0"></Input>
                        <Button><Text>Add</Text></Button>
                    </div>
            </Modal>
        </div>
        </>
    )
}