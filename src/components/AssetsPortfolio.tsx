import { useState } from "react"
import Modal from "./Modal"
import {Text} from "./Text"

export default function AssetsPortfolio () {

    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleModalClick = () => {
        setIsModalVisible((prev: boolean) => !prev)
    }

     return (
        <div className=' p-3 rounded-md border-borderColor border-[2px]  cursor-pointer' onClick={handleModalClick}>
            <Text variant={"utility"}>134,32 USD</Text>&nbsp;<Text variant={'priceUp'}>+2,38 (1,80 %)</Text>
            <Modal isVisible={isModalVisible} className="border-borderColor border-2 p-5 bg-modalBackground rounded-xl grid place-items-center"  onClick={handleModalClick}>
                Modal
            </Modal>
        </div>
     )
}

