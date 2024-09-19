import { Text } from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { ClickHandlerType } from "../utils/types";

interface CoinModalProps {
    isVisible: boolean,
    onModalClick: ClickHandlerType 
}
const CoinModal: React.FC<CoinModalProps> = ({ isVisible, onModalClick }) => {
    return (
        <Modal isVisible={isVisible} onClick={onModalClick}>
                    <div className=" flex flex-col items-center gap-3">
                        <img src="https://assets.coincap.io/assets/icons/btc@2x.png" className="w-10"></img>
                        <Text>BTC</Text>
                    </div>
                    <div className=" flex gap-3 items-center flex-col sm:flex-row">
                        <Text variant='utility'>0.00 $</Text>
                        <Input placeholder="0"></Input>
                        <Button><Text>Add</Text></Button>
                    </div>
            </Modal>
    )
}

export default CoinModal