import { useNavigate, useParams } from "react-router-dom"
import { Text } from "../components/Text"
import Button from "../components/Button"
import { SyntheticEvent, useState } from "react"
import Modal from "../components/Modal"
import Input from "../components/Input"
import Chart from "react-apexcharts"
import { getCurrentCoin } from "../api/coinApi"
import { useQuery } from "@tanstack/react-query"
import Loader from "../components/Loader"
import { formatCost } from "../utils/utilFuncs"

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
    ],
    stroke: {
      curve: 'smooth',
    }
    
  };

export default function CoinPage () {

    const [isCoinModalOpened, setIsCoinModalOpened] = useState(false)

    const handleCoinModalClick = (e: SyntheticEvent) => {
        setIsCoinModalOpened((prev: boolean) => !prev);
        e.stopPropagation()
    }

    const navigate = useNavigate()

    const {coinId} = useParams()

    const { isPending, error, data } = useQuery({
      queryKey: ['coin'],
      queryFn: () =>
        getCurrentCoin(coinId?.toString() || "bitcoin")
    }) 

    const handleBackClick = () => {
      navigate("/")
    }

    if (isPending) return <Loader isVisible={isPending}/>

    if (error) return 'An error has occurred: ' + error.message
  
    return (
      <> 
        <div className=" flex items-center h-full justify-between relative">
            <div className=" flex flex-col items-start gap-6 p-6">
                <div className=" flex items-center gap-5">
                    <img src={`https://assets.coincap.io/assets/icons/${data.symbol.toLocaleLowerCase()}@2x.png`} className=" w-9"></img>
                    <Text>{data.name}</Text><Text variant='utility'>{data.symbol}</Text>
                </div>
                <Text variant='utility'>rank: {data.rank ? formatCost(data.rank) : "not found"}</Text>
                <Text variant='utility'>supply: {data.supply ? formatCost(data.supply) : "not found"}</Text>
                <Text variant='utility'>price: {data.priceUsd ? formatCost(data.priceUsd) : "not found"}</Text>
                <Text variant='utility'>capitalisation: {data.marketCapUsd ? formatCost(data.marketCapUsd) : "not found"}</Text>
                <Text variant='utility'>max supply: {data.maxSupply ? formatCost(data.maxSupply) : "not found"}</Text>
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
            <div className=" flex flex-col items-center">
                <Chart options={config.options} series={config.series} 
                type="line"
                width="500"
              />
              <div className=" flex items-center gap-3">
                <Button><Text variant='utility'>1 HOUR</Text></Button>
                <Button><Text variant='utility'>24 HOUR</Text></Button>
                <Button><Text variant='utility'>1 WEEK</Text></Button>
              </div>
            </div>
            <div className=" absolute top-0 left-0"><Button onClick={handleBackClick}><Text>Back</Text></Button></div>
        </div>
        </>
    )
}