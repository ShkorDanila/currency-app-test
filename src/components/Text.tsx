import { cva, VariantProps } from "class-variance-authority";
import { Props } from "./configs";
import { cn } from "../utils/tailwindUtil";

interface TextProps extends Props, VariantProps<typeof textVariants> {}

const textVariants = cva(
  "text-white w-fit text-sm md:text-base lg:text-lg xl:text-lg text-center",
  {
    variants: {
      variant: {
        normal: "font-semibold text-white",
        utility: "text-secondary",
        priceUp: "font-semibold text-green-600",
        priceDown: "font-semibold  text-red-600",
      },
    },
    defaultVariants: {
      variant: "normal",
    },
  }
);

const Text: React.FC<TextProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <span className={cn(textVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
};

export { Text, textVariants };
