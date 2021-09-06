import { Product } from "./product";

export enum SIZES {
  S = "S",
  M = "M",
  L = "L",
}

export interface AddedItem extends Product {
  amount: number;
  totalPrice: number;
  size: SIZES;
}

export type CartState = AddedItem[];

export enum CART_ACTIONS {
  ADD_NEW_ITEM = "ADD_NEW_ITEM",
  INC_ITEM_AMOUNT = "INC_ITEM",
  DEC_ITEM_AMOUNT = "DEC_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CHANGE_SIZE = "CHANGE_SIZE",
}

export interface AddNewItemAction {
  type: CART_ACTIONS.ADD_NEW_ITEM;
  payload: { item: Product };
}

export interface IncItemAction {
  type: CART_ACTIONS.INC_ITEM_AMOUNT;
  payload: { id: string };
}

export interface DecItemAction {
  type: CART_ACTIONS.DEC_ITEM_AMOUNT;
  payload: { id: string };
}

export interface RemoveItemAction {
  type: CART_ACTIONS.REMOVE_ITEM;
  payload: { id: string };
}

export interface ChangeSizeAction {
  type: CART_ACTIONS.CHANGE_SIZE;
  payload: { id: string; size: SIZES };
}

export type CartAction =
  | AddNewItemAction
  | IncItemAction
  | DecItemAction
  | RemoveItemAction
  | ChangeSizeAction;
