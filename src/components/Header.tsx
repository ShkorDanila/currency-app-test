import AssetsPortfolio from "./AssetsPortfolio";
import HeaderExRate from "./HeaderText";

export default function Header () {
    return (
        <header className="w-full h-24 border-b-[#323546] border-b-[1px] flex items-center justify-between px-5">
            <div className="flex items-center justify-around gap-3">
                <HeaderExRate>BTC: 19 USD (+15%)</HeaderExRate>
                <HeaderExRate>ETH: 19 USD (+15%)</HeaderExRate>
                <HeaderExRate>TON: 19 USD (+15%)</HeaderExRate>
            </div>
            <AssetsPortfolio/>
        </header>
    )
}