import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { COIN_API_URL } from "../../utils/configs";
import { CoinType } from "../../utils/types";

interface ResponseCoinType {
  timestamp: "string";
  data: CoinType[];
}

export const coinApi = createApi({
  reducerPath: "coinApi",
  baseQuery: fetchBaseQuery({ baseUrl: COIN_API_URL }),
  endpoints: (build) => ({
    fetchAllCoins: build.query<ResponseCoinType, string>({
      query: () => ({
        url: "",
      }),
    }),
  }),
});
