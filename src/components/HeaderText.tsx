import { Props } from "./configs"

const HeaderText: React.FC<Props> = ({ children }) => {
    return (
    <div className="text-white font-semibold">
        { children }
    </div>
    )
}

export default HeaderText