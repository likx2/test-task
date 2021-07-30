import { CartState } from "./cart";
import { PriceState } from "./price";
import { ProductState } from "./product";

export interface GlobalState {
  cart: CartState;
  product: ProductState;
  price: PriceState;
}
