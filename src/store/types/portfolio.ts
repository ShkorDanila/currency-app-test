import { CoinTypeStrict } from "../../utils/types";

export interface PortfolioAction {
  type: string;
  payload: CoinTypeStrict;
}
export interface PortfolioState {
  items: CoinTypeStrict[];
}
export interface CurrentPortfolioAction {
  type: string;
  payload: { priceUsd: number; id: string; count: number };
}
export interface CurrentPortfolioState {
  items: { priceUsd: number; id: string; count: number }[];
}
