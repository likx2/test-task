import { CartState } from "../../types/cart";

const initialState: CartState = {
  addedItems: [],
};

export interface CartItem {
  id: string;
  size: string;
  amount: number;
}

export const cartReducer = (state = initialState, action: any) => {
  return state;
};
