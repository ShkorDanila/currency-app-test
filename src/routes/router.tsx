import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Main/Layout";
import CoinPage from "../layouts/CoinPage";
import CoinTablePage from "../layouts/CoinTablePage/CoinTablePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CoinTablePage />,
      },
      {
        path: "/:coinId",
        element: <CoinPage />,
      },
    ],
  },
]);
