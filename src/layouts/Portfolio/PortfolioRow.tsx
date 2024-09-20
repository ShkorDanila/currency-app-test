import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TableRow from "../../components/TableRow";
import { Text } from "../../components/Text";
import { ClickHandlerType, CoinType, PortfolioType } from "../../utils/types";
import { formatCost } from "../../utils/utilFuncs";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { removeCoin } from "../../store/slice/portfolioSlice";

interface PortfolioRowProps {
  portfolio: PortfolioType[];
  eqCoin: CoinType;
  onModalClick: ClickHandlerType;
}

const PortfolioRow: React.FC<PortfolioRowProps> = ({
  eqCoin,
  portfolio,
  onModalClick,
}) => {
  const dispatch = useDispatch();
  const [currentCount, setCurrentCount] = useState("");

  const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) return;
    if (e.target.value.length > 3) return;
    setCurrentCount(e.target.value);
  };
  const handleDeleteClick = (e: SyntheticEvent) => {
    const countN = Number(currentCount);

    if (countN <= 0 || currentCount.length > 3) return;

    dispatch(
      removeCoin(
        Object.assign({}, eqCoin, {
          count: Number(portfolio.find((item) => item.id === eqCoin.id)?.count),
        })
      )
    );
    onModalClick(e);
  };
  return (
    <TableRow className=' flex-col sm:flex-row'>
      <div className='flex gap-3 items-center'>
        <div>
          <Text>{eqCoin.symbol}</Text>&nbsp;
          <Text variant={"utility"}>
            x{portfolio.find((item) => item.id === eqCoin.id)?.count}
          </Text>
        </div>
        <div>
          <Text>$</Text>&nbsp;
          <Text>
            {formatCost(
              (
                Number(eqCoin.priceUsd) *
                (portfolio.find((item) => item.id === eqCoin.id)?.count || 0)
              ).toString()
            )}
          </Text>
        </div>
        <Text
          variant={
            Number(Number(eqCoin.changePercent24Hr).toFixed(2)) > 0
              ? "priceUp"
              : Number(Number(eqCoin.changePercent24Hr).toFixed(2)) < 0
              ? "priceDown"
              : "utility"
          }
        >
          {Number(Number(eqCoin.changePercent24Hr).toFixed(2))}%
        </Text>
      </div>
      <div className='flex gap-3 justify-end'>
        <Input
          onChange={handleCountChange}
          value={currentCount}
          className='w-20'
          type='number'
          placeholder='0'
        ></Input>
        <Button onClick={handleDeleteClick}>
          <Text variant={"utility"}>Delete</Text>
        </Button>
      </div>
    </TableRow>
  );
};

export default PortfolioRow;
