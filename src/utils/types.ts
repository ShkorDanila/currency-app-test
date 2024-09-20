import { SyntheticEvent } from "react";

export interface ClickHandlerType {
  (e: SyntheticEvent): void;
}

export interface ModalClickHandlerType {
  (e: SyntheticEvent, value: CoinType): void;
}

export interface CustomClickHandlerType {
  (value: string): void;
}

export interface UpdateHandlerType {
  (): void;
}

export interface CoinType {
  id: string;
  rank: string | number;
  symbol: string;
  name: string;
  supply: string | number;
  maxSupply: string | number;
  marketCapUsd: string | number;
  volumeUsd24Hr: string | number;
  priceUsd: string | number;
  changePercent24Hr: string | number;
  vwap24Hr: string | number;
  count?: number;
}

export interface CoinTypeStrict {
  id: string;
  rank: string | number;
  symbol: string;
  name: string;
  supply: string | number;
  maxSupply: string | number;
  marketCapUsd: string | number;
  volumeUsd24Hr: string | number;
  priceUsd: string | number;
  changePercent24Hr: string | number;
  vwap24Hr: string | number;
  count: number;
}

export interface SmallCoinType {
  id: string;
  symbol: string;
  priceUsd: string | number;
}

export interface PortfolioType {
  id: string;
  count: number;
}
