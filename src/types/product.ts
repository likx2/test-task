import { Price } from "./price";

export enum PRODUCT_ACTIONS {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  CHANGE_CATEGORY = "CHANGE_CATEGORY",
  ERROR = "ERROR",
}

export interface FetchProductsAction {
  type: PRODUCT_ACTIONS.FETCH_PRODUCTS;
  payload: { products: Product[]; loading: boolean };
}

export interface ChangeCategoryAction {
  type: PRODUCT_ACTIONS.CHANGE_CATEGORY;
  payload: string;
}

export interface ErrorAction {
  type: PRODUCT_ACTIONS.ERROR;
  payload: string;
}
export type ProductActionType =
  | FetchProductsAction
  | ChangeCategoryAction
  | ErrorAction;

interface Attribute {
  displayValue: string;
  value: string;
  id: string;
}

interface AttributeSet {
  id: string;
  name: string;
  type: string;
  items: [Attribute];
}

export interface Product {
  id: string;
  name: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;
  attributes: AttributeSet[];
  prices: Price[];
}

export interface ProductState {
  currentCategory: string;
  products: Product[];
  loading: boolean;
  error: string;
  gallery: string[];
}

export const CATEGORIES = ["tech", "clothes"] as const;
