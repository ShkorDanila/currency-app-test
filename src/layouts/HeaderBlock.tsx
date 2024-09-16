import AssetsPortfolio from "../components/AssetsPortfolio";
import {Text} from "../components/Text";

export default function Header () {
    return (
        <header className="w-full  border-b-[#323546] border-b-[1px] flex items-center p-borderPadding flex-col justify-evenly md:flex-row gap-3 md:justify-between md:gap-0">
            <div className="flex items-center justify-around gap-3">
                <Text variant={'utility'}>BTC: 19 USD (+15%)</Text>
                <Text variant={'utility'}>ETH: 19 USD (+15%)</Text>
                <Text variant={'utility'}>TON: 19 USD (+15%)</Text>
            </div>
            <AssetsPortfolio/>
        </header>
    )
}