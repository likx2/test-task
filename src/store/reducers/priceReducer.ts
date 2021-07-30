import { CURRENCIES, PriceState, PRICE_ACTIONS } from "../../types/price";

const initialState: PriceState = {
  currentCurrency: CURRENCIES[0].name,
};
export const priceReducer = (state = initialState, action: any): PriceState => {
  switch (action.type) {
    case PRICE_ACTIONS.CHANGE_CURRENCY:
      return { currentCurrency: action.payload };

    default:
      return state;
  }
};
