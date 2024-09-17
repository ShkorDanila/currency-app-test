import Button from "../components/Button";
import Input from "../components/Input";
import Option from "../components/Option";
import Table from "../components/Table";
import TableRow from "../components/TableRow";
import { Text } from "../components/Text";

export default function CoinTablePage () {
    return (
        <div className="h-full w-full flex flex-col items-center gap-7 ">
            <div className="flex items-center gap-5 flex-col sm:flex-row">
                <Input className=" w-full sm:w-fit" placeholder="Search"></Input>
                <div className="flex items-center gap-3 h-full">
                    <Text>Sort By: </Text>
                    <Option options={["First", "Second"]}></Option>
                </div>
            </div>
            <Table>
                <TableRow className="justify-evenly">
                    <Text>BTC</Text>
                    <img src="https://assets.coincap.io/assets/icons/btc@2x.png" className="w-8"></img>
                    <Text>$ 0.00</Text>
                    <Text>$ 00000</Text>
                    <Text variant='priceUp'>2.5%</Text>
                    <Button><Text variant='utility'>Add</Text></Button>
                </TableRow>
            </Table>
        </div>
    )
}