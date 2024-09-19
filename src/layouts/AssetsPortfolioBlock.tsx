import { useState } from "react"
import Modal from "../components/Modal"
import {Text} from "../components/Text"
import Table from "../components/Table"
import TableRow from "../components/TableRow"
import Button from "../components/Button"
import Input from "../components/Input"

export default function AssetsPortfolio () {

    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleModalClick = () => {
        setIsModalVisible((prev: boolean) => !prev)
    }

     return (
        <>
        <div onClick={handleModalClick} className=' p-3 rounded-md border-borderColor border-[2px]  cursor-pointer' >
            <Text  variant={"utility"}>134,32 USD</Text>&nbsp;<Text variant={'priceUp'}>+2,38 (1,80 %)</Text>
        </div>
            <Modal isVisible={isModalVisible} 
                    onClick={handleModalClick}>
                        <div><Text>Total balance:</Text>&nbsp;<Text variant={'utility'}>12.45 USD</Text>&nbsp;<Text variant={'priceDown'}>-2,38 (1,80 %)</Text></div>
                        <Table>
                             <TableRow className=" flex-col sm:flex-row">
                                <div className="flex gap-3 items-center">
                                <div>
                                    <Text>BTC</Text>&nbsp;<Text variant={'utility'}>x200</Text>
                                </div>
                                <div>
                                    <Text>$</Text>&nbsp;<Text>00000</Text></div>
                                    <Text variant={'priceUp'}>+1,80 %</Text>
                                </div>
                                <div className="flex gap-3 justify-end">
                                    <Input className="w-20" type="number" placeholder="0"></Input>
                                    <Button><Text variant={'utility'}>Delete</Text></Button>
                                </div>
                             </TableRow>
                             <TableRow className=" flex-col sm:flex-row">
                                <div className="flex gap-3 items-center">
                                <div>
                                    <Text>BTC</Text>&nbsp;<Text variant={'utility'}>x200</Text>
                                </div>
                                <div>
                                    <Text>$</Text>&nbsp;<Text>00000</Text></div>
                                    <Text variant={'priceUp'}>+1,80 %</Text>
                                </div>
                                <div className="flex gap-3 justify-end">
                                    <Input className="w-20" type="number" placeholder="0"></Input>
                                    <Button><Text variant={'utility'}>Delete</Text></Button>
                                </div>
                             </TableRow>
                             <TableRow className=" flex-col sm:flex-row">
                                <div className="flex gap-3 items-center">
                                <div>
                                    <Text>BTC</Text>&nbsp;<Text variant={'utility'}>x200</Text>
                                </div>
                                <div>
                                    <Text>$</Text>&nbsp;<Text>00000</Text></div>
                                    <Text variant={'priceUp'}>+1,80 %</Text>
                                </div>
                                <div className="flex gap-3 justify-end">
                                    <Input className="w-20" type="number" placeholder="0"></Input>
                                    <Button><Text variant={'utility'}>Delete</Text></Button>
                                </div>
                             </TableRow>
                        </Table>
            </Modal>
        </>
     )
}

