import { useState } from "react"
import Modal from "./Modal"
import HeaderText from "./HeaderText"

export default function AssetsPortfolio () {

    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleModalClick = () => {
        setIsModalVisible((prev: boolean) => !prev)
    }
    
//     <div>
//     <div className=" absolute cursor-pointer w-full h-full">
//         <div className="focus:bg-black focus:w-56 focus:h-56"></div>
//     </div>

// </div>

     return (
        <div onClick={handleModalClick}>
        <HeaderText>134,32 USD +2,38 (1,80 %)</HeaderText>
        <Modal isVisible={isModalVisible} onClick={handleModalClick}>
            Modal
        </Modal>
        </div>
     )
}

