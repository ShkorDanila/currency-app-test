import { cva, VariantProps } from "class-variance-authority"
import { Props } from "./configs"
import { cn } from "../utils/tailwindUtil"

interface TextProps extends Props, VariantProps<typeof textVariants> {
}

const textVariants = cva(
    "text-white",
    {
        variants: {
            variant: {
                normal:
                    'font-semibold text-sm md:text-md text-white',
                utility:
                    'text-sm text-[#9ba2b5]',
                priceUp:
                    'font-semibold text-sm md:text-md text-green-600',
                priceDown:
                    'font-semibold text-sm md:text-md text-red-600',
            }
        },
        defaultVariants: {
            variant: 'normal'
        }
    }
)

const Text: React.FC<TextProps> = ({ className, variant, children, ...props }) => {
    return (
    <span className={cn(textVariants({variant, className}))} {...props}>
        { children }
    </span>
    )
}

export {Text, textVariants}