import { cn } from "../utils/tailwindUtil";
import { InputHTMLAttributes } from "react";



const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ children, className, ...props}) => {
    return (
        <input className={cn(" border-borderColor bg-transparent border-2 px-3 py-1 rounded-md hover:bg-mainBackground text-secondary", className)} {...props}>{children}</input>
    );
}

export default Input