import {
  CATEGORIES,
  ProductActionType,
  ProductState,
  PRODUCT_ACTIONS,
} from "../../types/product";

const initialState: ProductState = {
  products: [],
  currentCategory: CATEGORIES[0],
  loading: true,
  error: "",
  gallery: [],
};

export const productReducer = (
  state = initialState,
  action: ProductActionType
): ProductState => {
  switch (action.type) {
    case PRODUCT_ACTIONS.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        loading: action.payload.loading,
      };
    case PRODUCT_ACTIONS.CHANGE_CATEGORY:
      return { ...state, currentCategory: action.payload };

    case PRODUCT_ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
