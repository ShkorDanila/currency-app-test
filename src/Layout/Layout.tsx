import Header from "../components/Header";
import LayoutWrapper from "../components/LayoutWrapper";
import MainBlock from "../components/MainBlock";

export default function Layout() {
  return (
    <LayoutWrapper>
      <Header/>
      <MainBlock/>
    </LayoutWrapper>
  )
}