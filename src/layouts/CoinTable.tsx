import { Text } from "../components/Text";
import Button from "../components/Button";
import Table from "../components/Table";
import TableRow from "../components/TableRow";
import { useNavigate } from "react-router-dom";
import { ClickHandlerType } from "../utils/types";
import { useEffect, useState } from "react";
import { coinApi } from "../store/apis/coinsApi";
import Loader from "../components/Loader";
import { formatCost, marketCapComparator, marketCapComparatorDesc, normalizeText, priceComparator, priceComparatorDesc } from "../utils/utilFuncs";

interface CoinModalClickType {
    onModalClick: ClickHandlerType,
    currentSearchTearm: string,
    currentSortType: string
}

const CoinTable: React.FC<CoinModalClickType> = ({onModalClick, currentSearchTearm, currentSortType}) => {
    
    const { data, isLoading, isError } = coinApi.useFetchAllCoinsQuery("", {
        pollingInterval: 10000,
    })
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(0)
    const [tableRows, setTableRows] = useState([<></>])
    
    const handleCoinClick = (id: string) => () => {
        navigate(`/${id}`)
    }

    const handleNext = () => {
        if(currentPage < (data?.data.length || 100)/7-1)
            setCurrentPage(prev => prev + 1)
    }
    

    const handlePrev = () => {
        if(currentPage > 0)
            setCurrentPage(prev => prev - 1)
    }

    const getSortType = (value: string) => {
        const norval = normalizeText(value)
        if(norval === "price")
            return priceComparator
        if(norval === "price(desc)")
            return priceComparatorDesc
        if(norval === "cap")
            return marketCapComparator
        if(norval === "cap(desc)")
            return marketCapComparatorDesc
        return undefined;
    }

    useEffect(() => {
        const coinsInfo = data?.data || []
        if(coinsInfo.length > 0) {
            setTableRows(
                coinsInfo.filter((({name, symbol}) => 
                normalizeText(name)
                    .includes(normalizeText(currentSearchTearm)) ||
                normalizeText(symbol)
                    .includes(normalizeText(currentSearchTearm))
                    ))
                    .sort(getSortType(currentSortType))
                    .slice(currentPage*7,currentPage*7+7).map(({id, symbol, priceUsd, changePercent24Hr, marketCapUsd}) => 
                    (
                        <TableRow id={id} onClick={handleCoinClick(id)} className="justify-evenly cursor-pointer">
                            <div className=" flex flex-col flex-1">
                                <img className=" w-4 sm:w-6 md:w-8" src={`https://assets.coincap.io/assets/icons/${symbol.toLocaleLowerCase()}@2x.png`}/>
                                <Text>{symbol}</Text>
                            </div>
                            <Text variant='utility' className=" flex-1">$ {formatCost(priceUsd.toString())}</Text>
                            <Text variant='utility' className="hidden md:inline flex-1">$ {formatCost(marketCapUsd.toString())}</Text>
                            <Text className=" flex-1" variant={Number(Number(changePercent24Hr).toFixed(2)) > 0 ? 'priceUp' : (Number(Number(changePercent24Hr).toFixed(2)) < 0 ? 'priceDown' : 'utility')}>
                                {Number(Number(changePercent24Hr).toFixed(2))}%
                            </Text>
                            <Button className=" flex-1" onClick={onModalClick}><Text variant='utility'>Add</Text></Button>
                        </TableRow>
                    )
                )
            )
        }
        console.log(getSortType(currentSortType));
        
    }, [data, currentSearchTearm, currentPage, currentSortType])

    return (
        <>
        <Table>
                <TableRow className="justify-evenly cursor-pointer flex-1">
                            <Text className="place-self-center flex-1">Name</Text>
                            <Text className=" flex-1">Price</Text>
                            <Text className="hidden md:inline flex-1">Market Cap</Text>
                            <Text className=" flex-1">Change Percent</Text>
                            <Text className=" flex-1"/>
                </TableRow>
                {!isLoading && tableRows}
                {isError && 
                <TableRow>
                    <Text>An error occurred during data loading</Text>
                </TableRow>
                }
            </Table>
            <div className=" flex items-center gap-4">
                <Button onClick={handlePrev} className=" w-24"><Text variant='utility'>Previous</Text></Button>
                <Button onClick={handleNext} className=" w-24"><Text variant='utility'>Next</Text></Button>
            </div>
            <Loader isVisible={isLoading}>
                <img src="https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif" className="w-56"></img>
            </Loader>
            
        </>
    )
}

export default CoinTable