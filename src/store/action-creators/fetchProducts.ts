import { gql } from "@apollo/client";
import { Dispatch } from "react";
import { client } from "../../apollo";
import { ProductActionType, PRODUCT_ACTIONS } from "../../types/product";

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductActionType>) => {
    try {
      const response = await client.query({
        query: gql`
          {
            category {
              products {
                id
                name
                inStock
                gallery
                description
                category
                prices {
                  currency
                  amount
                }
              }
            }
          }
        `,
      });

      const {
        data: {
          category: { products },
        },
        loading,
      } = response;

      dispatch({
        type: PRODUCT_ACTIONS.FETCH_PRODUCTS,
        payload: { loading, products },
      });
    } catch (e) {
      dispatch({
        type: PRODUCT_ACTIONS.ERROR,
        payload: "Something went wrong",
      });
      throw e.message;
    }
  };
};
