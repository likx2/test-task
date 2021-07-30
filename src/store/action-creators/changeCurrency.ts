import { PRICE_ACTIONS } from "../../types/price";

export const changeCurrency = (currency: string) => {
  return {
    type: PRICE_ACTIONS.CHANGE_CURRENCY,
    payload: currency,
  };
};
