import { cn } from "../utils/tailwindUtil";
import { Props } from "./configs";
import { Text } from "./Text";

interface OptionUnit extends Props {
    value: string;
}

const OptionUnit: React.FC<OptionUnit> = ({ className, value, ...props}) => {
    return (
        <div className={cn("cursor-pointer border-borderColor w-full bg-transparent border-2 px-3 py-1 rounded-md text-secondary hover:bg-modalBackground", className)} {...props}><Text variant={'utility'}>{value}</Text></div>
    );
}

export default OptionUnit