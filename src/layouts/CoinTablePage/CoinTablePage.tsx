import { ChangeEvent, useState } from "react";
import CoinTable from "./CoinTable";
import { SORT_OPTIONS } from "../../utils/configs";
import Option from "../../components/Option";
import { Text } from "../../components/Text";
import Input from "../../components/Input";

export default function CoinTablePage() {
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const [currentOption, setCurrentOption] = useState("Choose an option");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchTerm(e.target.value);
  };

  const handleOptionChange = (value: string) => {
    setCurrentOption(value);
  };

  return (
    <>
      <div className='h-full w-full flex flex-col items-center gap-7 '>
        <div className='flex items-center gap-5 flex-col sm:flex-row'>
          <Input
            onChange={handleSearchChange}
            className=' w-full sm:w-fit'
            placeholder='Search'
          ></Input>
          <div className='flex items-center gap-3 h-full'>
            <Text>Sort By: </Text>
            <Option
              onOptionChange={handleOptionChange}
              initial={currentOption}
              options={Object.values(SORT_OPTIONS)}
            ></Option>
          </div>
        </div>
        <CoinTable
          currentSortType={currentOption}
          currentSearchTearm={currentSearchTerm}
        />
      </div>
    </>
  );
}
