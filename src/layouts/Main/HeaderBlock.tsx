import AssetsPortfolio from "../Portfolio/AssetsPortfolioBlock";
import {Text} from "../../components/Text";
import { coinApi } from "../../store/apis/coinsApi";
import { useEffect, useState } from "react";
import { CoinType } from "../../utils/types";
import { formatCost } from "../../utils/utilFuncs";

export default function Header () {

    const { data, isLoading } = coinApi.useFetchAllCoinsQuery("")
    const [neededData, setNeededData] = useState([<></>])

    useEffect(() => {
        if(!isLoading && data?.data)
        {   
            let sorted = [...data.data];
            sorted = sorted.sort((first, second) => Number(first.rank) - Number(second.rank)).slice(0,3)
            setNeededData(
                sorted.map(({symbol, priceUsd, changePercent24Hr}: CoinType) => 
                <Text variant={'utility'}>{symbol}: {formatCost(priceUsd.toString())}$ ({Number(Number(changePercent24Hr).toFixed(2))}%)</Text>)
            )
        }
        
        
    }, [data, isLoading])

    return (
    <>
        <header className="w-full  border-b-[#323546] border-b-[1px] flex items-center p-borderPadding flex-col justify-evenly md:flex-row gap-3 md:justify-between md:gap-0">
        {!isLoading &&
            <div className="flex items-center justify-around gap-3">
                {neededData}
            </div>
            }
            <AssetsPortfolio/>
        </header>
        </>
    )
}