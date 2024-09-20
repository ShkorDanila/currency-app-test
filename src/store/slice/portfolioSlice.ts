import { createSlice } from "@reduxjs/toolkit";
import { PortfolioAction, PortfolioState } from "../types/portfolio";

const initialState: PortfolioState = {
  items: [],
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: initialState,
  reducers: {
    addCoin(state: PortfolioState, action: PortfolioAction) {
      const index = state.items.find((item) => item.id == action.payload.id);

      if (index) {
        index.count += action.payload.count;
        state.items = state.items.filter((n) => n.id !== action.payload.id);
        state.items.push(index);
      } else {
        state.items.push(action.payload);
      }
    },
    removeCoin(state: PortfolioState, action: PortfolioAction) {
      state.items = state.items.filter((n) => n.id !== action.payload.id);
      if (action.payload.count > 0) {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addCoin, removeCoin } = portfolioSlice.actions;
