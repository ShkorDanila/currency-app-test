import { Props } from "./configs"

const LayoutWrapper: React.FC<Props> = ({ children}) => {
    return (
    <div className="flex flex-col w-screen h-screen bg-mainBackground font-Roboto">
        { children }
    </div>
    )
}

export default LayoutWrapper