import { Props } from "./configs";
import { cn } from "../utils/tailwindUtil";

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        " border-borderColor bg-transparent border-2 px-3 py-1 rounded-md hover:bg-modalBackground w-fit",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
