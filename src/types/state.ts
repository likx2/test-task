import { CartState } from "./cart";
import { ProductState } from "./product";

export interface GlobalState {
  cart: CartState;
  product: ProductState;
}
