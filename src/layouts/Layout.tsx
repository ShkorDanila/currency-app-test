import Header from "./HeaderBlock";
import LayoutWrapper from "../components/LayoutWrapper";
import MainBlock from "./MainBlock";

export default function Layout() {
  return (
    <LayoutWrapper>
      <Header/>
      <MainBlock/>
    </LayoutWrapper>
  )
}