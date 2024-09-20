import { createSlice } from "@reduxjs/toolkit";
import { PortfolioType } from "../../utils/types";

export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

const initialState:  PortfolioType[] = []

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: initialState,
  reducers: {
      addCoin(state, action) {
        const {id, count} = action.payload
        const needed = state.find((item) => item.id === id)
        if(!needed) {
          state.push({id,count})
          return;
        }
        needed.count += count;
      },
      removeCoin(state, action) {
        const {id, count} = action.payload
        const needed = state.find((item) => item.id === id)
        if(needed) {
          if((needed.count - count) <= 0) {
            return state.filter((item) => item.id !== id)
          }
          else {
            needed.count -= count
          }
        }
      }
}});

export const { addCoin,  removeCoin} = portfolioSlice.actions