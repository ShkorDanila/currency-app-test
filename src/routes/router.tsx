import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import CoinTablePage from "../layouts/CoinTablePage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <CoinTablePage/>,
            }
        ]
    }
])