import { Outlet } from "react-router-dom"

const MainBlock = () => {
    return (
        <main className=" flex-grow p-borderPadding">
            <Outlet/>
        </main>
    )
}

export default MainBlock