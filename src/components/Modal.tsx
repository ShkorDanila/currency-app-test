import { SyntheticEvent } from "react";
import { Props } from "./configs"
import { cn } from "../utils/tailwindUtil";
import { cva, VariantProps } from "class-variance-authority";

interface ModalProps extends Props, VariantProps<typeof modalVariants>{
    isVisible: boolean;
}

const modalVariants = cva(
    "",
    {
        variants: {
            variant: {
                default:
                    'border-borderColor border-2 p-borderPadding bg-modalBackground rounded-xl flex flex-col gap-3 items-center',
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

const Modal: React.FC<ModalProps> = ({ children, isVisible, className, variant, onClick }) => {
    return isVisible ? (
        <div onClick={onClick} className="absolute w-screen h-screen backdrop-blur-sm left-0 top-0 grid place-items-center z-50">
            <div className={cn(modalVariants({variant, className}), "w-fit")} onClick={(e: SyntheticEvent) => e.stopPropagation()}>
                { children }
            </div>
        </div>
    ) : null;
}

export default Modal