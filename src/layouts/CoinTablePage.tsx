import { ChangeEvent, SyntheticEvent, useState } from "react";
import Input from "../components/Input";
import Option from "../components/Option";
import { Text } from "../components/Text";
import CoinModal from "./CoinModal";
import CoinTable from "./CoinTable";

export default function CoinTablePage () {

    const [isCoinModalOpened, setIsCoinModalOpened] = useState(false)
    const [currentSearchTerm, setCurrentSearchTerm] = useState("")
    const [currentOption, setCurrentOption] = useState("Choose an option")

    const handleModalClick = (e: SyntheticEvent) => {
        setIsCoinModalOpened((prev: boolean) => !prev);
        e.stopPropagation()
    }

    const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCurrentSearchTerm(e.target.value)
    }

    const handleOptionChange = (value: string) => {
        setCurrentOption(value)
    }

    return (
        <>
        <div className="h-full w-full flex flex-col items-center gap-7 ">
            <div className="flex items-center gap-5 flex-col sm:flex-row">
                <Input onChange={handleSearchChange} className=" w-full sm:w-fit" placeholder="Search"></Input>
                <div className="flex items-center gap-3 h-full">
                    <Text>Sort By: </Text>
                    <Option onOptionChange={handleOptionChange} initial={currentOption} options={["Price", "Price(Desc)","Cap", "Cap(Desc)"]}></Option>
                </div>
            </div>

            <CoinTable onModalClick={handleModalClick} currentSortType={currentOption} currentSearchTearm={currentSearchTerm}/>
            <CoinModal isVisible={isCoinModalOpened} onModalClick={handleModalClick}/>
        </div>
        </>
    )
}