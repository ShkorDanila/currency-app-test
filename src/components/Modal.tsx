import { SyntheticEvent } from "react";
import { Props } from "./configs"
import { cn } from "../utils/tailwindUtil";

interface ModalProps extends Props {
    isVisible: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isVisible, className }) => {
    return isVisible ? (
        <div className="absolute w-screen h-screen backdrop-blur-sm left-0 top-0 grid place-items-center">
            <div className={cn(className, "w-[90%] sm:w-fit")} onClick={(e: SyntheticEvent) => e.stopPropagation()}>
                { children }
            </div>
        </div>
    ) : null;
}

export default Modal