import { cn } from "../utils/tailwindUtil";
import { Props } from "./configs";

const TableRow: React.FC<Props> = ({ children, className, ...props }) => {
    return (
        <div className={cn("w-full flex justify-around p-3 items-center gap-5 border-y-[1px] border-borderColor", className)} {...props}>
            {children}
        </div>
    );
}

export default TableRow