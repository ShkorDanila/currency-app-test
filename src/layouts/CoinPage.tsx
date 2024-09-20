import { useNavigate, useParams } from "react-router-dom"
import { Text } from "../components/Text"
import Button from "../components/Button"
import { SyntheticEvent, useEffect, useState } from "react"
import Chart from "react-apexcharts"
import { getCurrentCoin, getCurrentCoinHistory } from "../api/coinApi"
import { useQuery } from "@tanstack/react-query"
import Loader from "../components/Loader"
import { formatCost, getChartConfig } from "../utils/utilFuncs"
import CoinModal from "./CoinModal"
import { queryClient } from "../main"

interface ChartProps {
  priceUsd: string,
  time: number
}

const TimeOptions = {
  horly: {
    timeoffset: 3600000,
    tag: "m1"
  },
  bidaily: {
    timeoffset: 43196400,
    tag: "m30"
  },
  daily: {
    timeoffset: 90000000,
    tag: "h1"
  }
}

export default function CoinPage () {

    const [isCoinModalOpened, setIsCoinModalOpened] = useState(false)
    const [currentTimeMode, setCurrentTimeMode] = useState<typeof TimeOptions.horly>(TimeOptions.horly)
    const [currentChartConfig, setCurrentChartConfig] = useState(() => getChartConfig([],[]))

    const handleCoinModalClick = (e: SyntheticEvent) => {
        setIsCoinModalOpened((prev: boolean) => !prev);
        e.stopPropagation()
    }

    const navigate = useNavigate()

    const {coinId} = useParams()

    const coinQuery = useQuery({
      queryKey: ['coin'],
      queryFn: () =>
        getCurrentCoin(coinId?.toString() || "bitcoin")
    }) 
    
    const chartQuery = useQuery({
      queryKey: ['chart-data'],
      queryFn: () =>
        getCurrentCoinHistory(coinId?.toString() || "", Date.now() - currentTimeMode.timeoffset, Date.now(), currentTimeMode.tag),
    }) 
  
    const handleBackClick = () => {
      navigate("/")
    }

    const handleHourClick = () => {
      setCurrentTimeMode(TimeOptions.horly)
    }

    const handleBiHourClick = () => {
      setCurrentTimeMode(TimeOptions.bidaily)
    }

    const handleDayClick = () => {
      setCurrentTimeMode(TimeOptions.daily)
    }

    useEffect(() => {
      
      queryClient.invalidateQueries({ queryKey: ['chart-data'] })
      if(chartQuery.data) {
        setCurrentChartConfig(getChartConfig(chartQuery.data.map((item: ChartProps) => (new Date(item.time)).toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })), chartQuery.data.map((item: ChartProps) => Number(Number(item.priceUsd).toFixed(2)))))
      }
    }, [chartQuery.data, currentTimeMode])

    if (coinQuery.isPending) return <Loader isVisible={coinQuery.isPending}><img src="https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif" className="w-56"></img></Loader>

    if (coinQuery.error && !coinQuery.data) return <Text>An error has occurred: {coinQuery.error.message}</Text>
  
    return (
      <> 
        <div className=" flex items-center h-full justify-evenly relative flex-col md:flex-row">
            <div className=" flex flex-col items-start gap-3 p-6">
                <div className=" flex items-center gap-5">
                    <img src={`https://assets.coincap.io/assets/icons/${coinQuery.data.symbol.toLocaleLowerCase()}@2x.png`} className=" w-9"></img>
                    <Text>{coinQuery.data.name}</Text><Text variant='utility'>{coinQuery.data.symbol}</Text>
                </div>
                <Text variant='utility'>rank: {coinQuery.data.rank ? formatCost(coinQuery.data.rank) : "not found"}</Text>
                <Text variant='utility'>supply: {coinQuery.data.supply ? formatCost(coinQuery.data.supply) : "not found"}</Text>
                <Text variant='utility'>price: {coinQuery.data.priceUsd ? formatCost(coinQuery.data.priceUsd) : "not found"}</Text>
                <Text variant='utility'>capitalisation: {coinQuery.data.marketCapUsd ? formatCost(coinQuery.data.marketCapUsd) : "not found"}</Text>
                <Text variant='utility'>max supply: {coinQuery.data.maxSupply ? formatCost(coinQuery.data.maxSupply) : "not found"}</Text>
                <Button onClick={handleCoinModalClick} ><Text variant='utility'>Add</Text></Button>
            </div>
            <div className=" flex flex-col items-center overflow-hidden">
                <Chart options={currentChartConfig.options} series={currentChartConfig.series} 
                type="line"
                width="500"
              />
              <div className=" flex items-center gap-3">
                <Button onClick={handleHourClick}><Text variant={'utility'} id="oneHourBtn">1 HOUR</Text></Button>
                <Button onClick={handleBiHourClick}><Text variant={'utility'} id="twHourBtn">12 HOURS</Text></Button>
                <Button onClick={handleDayClick}><Text variant={'utility'} id="oneDayBtn">1 DAY</Text></Button>
              </div>
            </div>
            <div className=" absolute top-0 left-0"><Button onClick={handleBackClick}><Text>Back</Text></Button></div>
        </div>
        
        <CoinModal isVisible={isCoinModalOpened} onModalClick={handleCoinModalClick} coin={coinQuery.data}></CoinModal>
        </>
    )
}