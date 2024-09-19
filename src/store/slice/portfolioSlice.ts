import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    coinList: []
  },
  reducers: {
    setCoinList: (state, action) => {
      state.coinList = action.payload;
    },
  },
});

export const { setCoinList } = portfolioSlice.actions;