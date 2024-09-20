import {
  InputHTMLAttributes,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { cn } from "../utils/tailwindUtil";
import dropdownArrow from "../assets/dropdown-arrow-svgrepo-com.svg";
import { Text } from "./Text";
import OptionUnit from "./OptionUnit";
import { CustomClickHandlerType } from "../utils/types";

interface OptionProps extends InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  initial: string;
  onOptionChange: CustomClickHandlerType;
}

const Option: React.FC<OptionProps> = ({
  className,
  options,
  initial,
  onOptionChange,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentOption, setCurrentOption] = useState(initial);
  const [optionValues, setOptionValues] = useState([<></>]);

  const handleOpenClick = (e: SyntheticEvent<HTMLInputElement>) => {
    setIsOpened(e.currentTarget.checked);
  };

  const handleOptionClick = (value: string) => () => {
    onOptionChange(value);
    setCurrentOption(value);
    setIsOpened((prev) => !prev);
  };

  useEffect(() => {
    setOptionValues(
      options
        .filter((item) => item !== currentOption)
        .map((item: string) => {
          return (
            <OptionUnit
              key={item}
              value={item}
              onClick={handleOptionClick(item)}
            ></OptionUnit>
          );
        })
    );
  }, [options, currentOption]);

  return (
    <div className='relative w-56 h-full'>
      <div className='border-borderColor bg-transparent border-2 px-3 py-1 rounded-md hover:bg-modalBackground text-secondary relative h-full'>
        <div className='flex gap-3 items-center justify-between h-full'>
          <Text variant='utility'>{currentOption}</Text>
          <img
            src={dropdownArrow}
            className={`w-5 ${isOpened && "rotate-180"}`}
          ></img>
        </div>
        <input
          onChange={handleOpenClick}
          checked={isOpened}
          type='checkbox'
          className={cn(
            "appearance-none absolute h-full w-full cursor-pointer top-0 left-0",
            className
          )}
          {...props}
        />
      </div>
      {isOpened && (
        <div className='absolute top-[100%] w-full'>{optionValues}</div>
      )}
    </div>
  );
};

export default Option;
