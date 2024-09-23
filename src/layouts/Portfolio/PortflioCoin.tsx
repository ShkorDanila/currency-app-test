import { useQuery } from "@tanstack/react-query";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TableRow from "../../components/TableRow";
import { Text } from "../../components/Text";
import { formatCost } from "../../utils/utilFuncs";
import { getCurrentCoin } from "../../api/coinApi";
import { ChangeEvent, useEffect, useState } from "react";
import { removeCoin } from "../../store/slice/portfolioSlice";
import { useDispatch } from "react-redux";
import {
  addCoinCurrent,
  removeCoinCurrent,
} from "../../store/slice/currentPortfolioSlice ";

interface PortfolioCoinProps {
  coinId: string;
  count: number;
}

export default function PortfolioCoin({ coinId, count }: PortfolioCoinProps) {
  const [counter, setCounter] = useState("");
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery({
    queryKey: [{ coinId }],
    queryFn: () => getCurrentCoin(coinId),
  });

  useEffect(() => {
    if (data)
      dispatch(
        addCoinCurrent({
          priceUsd: Number(data.priceUsd),
          id: coinId,
          count: count,
        })
      );
  }, [isLoading]);

  const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) return;
    if (e.target.value.length > 3) return;
    setCounter(e.target.value);
  };
  const handleRemoveClick = () => {
    dispatch(
      removeCoin(Object.assign({}, data, { count: count - Number(counter) }))
    );
    dispatch(
      removeCoinCurrent({
        priceUsd: Number(data.priceUsd),
        id: coinId,
        count: count - Number(counter),
      })
    );
  };

  return (
    <>
      {!isLoading && (
        <TableRow id={coinId}>
          <div className='flex items-center gap-2'>
            <Text>{data.symbol}</Text>
            <img
              className=' w-4 sm:w-6 md:w-8'
              src={`https://assets.coincap.io/assets/icons/${data.symbol.toLocaleLowerCase()}@2x.png`}
            />
          </div>
          <Text variant={"utility"}>
            <pre>x{count}</pre>
          </Text>
          <Text>$ {formatCost(data.priceUsd.toString())}</Text>
          <Input
            placeholder='0'
            type='number'
            value={counter}
            onChange={handleCountChange}
          />
          <Button onClick={handleRemoveClick}>
            <Text>Delete</Text>
          </Button>
        </TableRow>
      )}
    </>
  );
}
