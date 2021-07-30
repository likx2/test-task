export interface Price {
  currency: string;
  amount: number;
}

export interface PriceState {
  currentCurrency: string;
}

export const CURRENCIES = [
  {
    name: "USD",
    sign: "$",
  },
  {
    name: "GBP",
    sign: "£",
  },
  {
    name: "AUD",
    sign: "¥",
  },
  {
    name: "JPY",
    sign: "$",
  },
  {
    name: "RUB",
    sign: "₽",
  },
] as const;

export enum PRICE_ACTIONS {
  CHANGE_CURRENCY = "CHANGE_CURRENCY",
}

export interface PriceChangeCurrencyAction {
  type: PRICE_ACTIONS.CHANGE_CURRENCY;
  payload: { currencyToChange: string };
}
