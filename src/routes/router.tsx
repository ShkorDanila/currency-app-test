import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import CoinTablePage from "../layouts/CoinTablePage"
import CoinPage from "../layouts/CoinPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <CoinTablePage/>,
            },
            {
                path: "/:coinId",
                element: <CoinPage/>,
            }
        ]
    }
])