import { PRODUCT_ACTIONS } from "../../types/product";

export const changeCategory = (category: string) => {
  return {
    type: PRODUCT_ACTIONS.CHANGE_CATEGORY,
    payload: category,
  };
};
