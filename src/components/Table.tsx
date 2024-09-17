import { cn } from "../utils/tailwindUtil";
import { Props } from "./configs";


const Table: React.FC<Props> = ({ children, className, ...props }) => {
    return (
        <div className={cn("w-full flex flex-col items-center", className)} {...props}>
            {children}
        </div>
    );
}

export default Table