import { useParams } from "react-router-dom"
import { Text } from "../components/Text"
import Button from "../components/Button"
import { SyntheticEvent, useState } from "react"
import Modal from "../components/Modal"
import Input from "../components/Input"
import Chart from "react-apexcharts"

const config = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  };

export default function CoinPage () {

    const [isCoinModalOpened, setIsCoinModalOpened] = useState(false)

    const handleCoinModalClick = (e: SyntheticEvent) => {
        setIsCoinModalOpened((prev: boolean) => !prev);
        e.stopPropagation()
    }

    const {coinId} = useParams()

    return (
        <div className=" flex items-center h-full justify-between">
            <div className=" flex flex-col items-start gap-6 p-6">
                <div className=" flex items-center gap-5">
                    <img src="https://assets.coincap.io/assets/icons/btc@2x.png" className=" w-9"></img>
                    <Text>Bitcoin</Text><Text variant='utility'>BTC</Text>
                </div>
                <Text variant='utility'>rank: </Text>
                <Text variant='utility'>supply: </Text>
                <Text variant='utility'>price: </Text>
                <Text variant='utility'>capitalisation: </Text>
                <Text variant='utility'>max supply: </Text>
                <Button onClick={handleCoinModalClick}><Text variant='utility'>Add</Text></Button>
                <Modal isVisible={isCoinModalOpened} 
                    onClick={handleCoinModalClick}
                    >
                    <div className=" flex flex-col items-center gap-3">
                        <img src="https://assets.coincap.io/assets/icons/btc@2x.png" className="w-10"></img>
                        <Text>BTC</Text>
                    </div>
                    <div className=" flex gap-3 items-center">
                        <Text variant='utility'>0.00 $</Text>
                        <Input placeholder="0"></Input>
                        <Button><Text>Add</Text></Button>
                    </div>
                </Modal>
            </div>
            <div>
                <Chart options={config.options} series={config.series} 
                type="bar"
                width="500"
              ></Chart>
            </div>
        </div>
    )
}