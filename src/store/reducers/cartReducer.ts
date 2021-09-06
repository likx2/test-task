import { CartAction, CartState, CART_ACTIONS, SIZES } from "../../types/cart";

const initialState: CartState = [];

export const cartReducer = (
  state = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CART_ACTIONS.ADD_NEW_ITEM:
      const { item } = action.payload;
      return [
        ...state,
        {
          ...item,
          amount: 1,
          totalPrice: item.prices[0].amount,
          size: SIZES.S,
        },
      ];

    case CART_ACTIONS.INC_ITEM_AMOUNT:
      const { id } = action.payload;
      return state.map((addedItem) =>
        addedItem.id === id
          ? {
              ...addedItem,
              amount: addedItem.amount + 1,
              totalPrice: addedItem.totalPrice + addedItem.prices[0].amount,
            }
          : addedItem
      );

    case CART_ACTIONS.DEC_ITEM_AMOUNT:
      return state.map((addedItem) =>
        addedItem.id === id
          ? {
              ...addedItem,
              amount: addedItem.amount - 1,
              totalPrice: addedItem.totalPrice - addedItem.prices[0].amount,
            }
          : addedItem
      );

    case CART_ACTIONS.REMOVE_ITEM:
      return state.filter((item) => item.id !== id);

    case CART_ACTIONS.CHANGE_SIZE:
      const { size } = action.payload;
      return state.map((addedItem) =>
        addedItem.id === id
          ? {
              ...addedItem,
              size,
            }
          : addedItem
      );
    default:
      return state;
  }
};
