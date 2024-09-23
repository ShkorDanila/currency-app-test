import { cn } from "../utils/tailwindUtil";
import { Props } from "./configs";

const TableRow: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <li
      id={props.id}
      className={cn(
        "w-full flex justify-evenly p-3 items-center md:gap-5 border-y-[1px] border-borderColor",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

export default TableRow;
