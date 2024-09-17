import { cn } from "../utils/tailwindUtil";
import { InputHTMLAttributes } from "react";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props}) => {
    return (
        <input className={cn(" border-borderColor bg-transparent border-2 px-3 py-1 rounded-md text-secondary", className)} {...props}/>
    );
}

export default Input