import { Props } from "./configs"

interface LoaderProps extends Props{
    isVisible: boolean;
}

const Loader: React.FC<LoaderProps> = ({ children, isVisible }) => {
    return isVisible ? (
        <div className="absolute w-screen h-screen backdrop-blur-sm left-0 top-0 grid place-items-center z-50">
                { children }
        </div>
    ) : null;
}
export default Loader