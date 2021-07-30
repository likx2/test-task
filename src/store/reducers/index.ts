import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { priceReducer } from "./priceReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  price: priceReducer,
});
