import { createSlice } from "@reduxjs/toolkit";
import {
  CurrentPortfolioAction,
  CurrentPortfolioState,
} from "../types/portfolio";

const initialState: CurrentPortfolioState = {
  items: [],
};

export const currentPortfolioSlice = createSlice({
  name: "currentPortfolio",
  initialState: initialState,
  reducers: {
    addCoinCurrent(
      state: CurrentPortfolioState,
      action: CurrentPortfolioAction
    ) {
      const index = state.items.find((item) => item.id == action.payload.id);
      if (!index) {
        state.items.push(action.payload);
      }
    },
    removeCoinCurrent(
      state: CurrentPortfolioState,
      action: CurrentPortfolioAction
    ) {
      state.items = state.items.filter((n) => n.id !== action.payload.id);
      if (action.payload.count > 0) {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addCoinCurrent, removeCoinCurrent } =
  currentPortfolioSlice.actions;
