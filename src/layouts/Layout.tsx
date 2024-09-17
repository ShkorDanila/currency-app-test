import Header from "./HeaderBlock";
import MainBlock from "./MainBlock";

export default function Layout() {
  return (
    <div className="flex flex-col w-screen h-screen bg-mainBackground font-Roboto">
      <Header/>
      <MainBlock/>
    </div>
  )
}