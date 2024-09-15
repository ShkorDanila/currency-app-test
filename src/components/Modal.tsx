import { SyntheticEvent } from "react";
import { Props } from "./configs"

interface ModalProps extends Props {
    isVisible: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isVisible }) => {
    return isVisible ? (
        <div className="absolute w-screen h-screen backdrop-blur-sm left-0 top-0 grid place-items-center">
            <div className="bg-white p-5 rounded-xl grid place-items-center" onClick={(e: SyntheticEvent) => e.stopPropagation()}>
                { children }
            </div>
        </div>
    ) : null;
}

export default Modal