import React, { Component, Dispatch } from "react";
import { connect } from "react-redux";
import { CartAction, CartState, CART_ACTIONS } from "../../types/cart";
import { CURRENCIES, Price } from "../../types/price";
import { Product } from "../../types/product";
import { GlobalState } from "../../types/state";
import {
  Card,
  CartCircle,
  ProductImg,
  ProductName,
  ProductPrice,
} from "./styles";

interface ProductProps {
  product: Product;
  currentCurrency: string;
  cartItems: CartState;
  addItemToCart: (product: Product) => void;
  incItemAmount: (id: string) => void;
}

class ProductItem extends Component<ProductProps> {
  clickHandler: () => void;

  constructor(props: ProductProps) {
    super(props);

    const { addItemToCart, incItemAmount, product } = this.props;

    this.clickHandler = () => {
      const isItemAddedToCart = this.props.cartItems.some(
        (item) => item.id === product.id
      );
      if (isItemAddedToCart) {
        incItemAmount(product.id);
      } else {
        addItemToCart(product);
      }
    };
  }

  getCurrency() {
    const price = this.props.product.prices.find(
      (price: Price) => price.currency === this.props.currentCurrency
    );

    const sign = CURRENCIES.find(
      (currency) => currency.name === this.props.currentCurrency
    )?.sign;

    return `${sign}${price?.amount}`;
  }

  render() {
    return (
      <Card>
        <ProductImg src={this.props.product.gallery[0]} alt="" />
        <ProductName>
          {this.props.product.name}
          <CartCircle onClick={this.clickHandler} />
        </ProductName>
        <ProductPrice>{this.getCurrency()}</ProductPrice>
      </Card>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {
    currentCurrency: state.price.currentCurrency,
    cartItems: state.cart,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CartAction>) => {
  return {
    addItemToCart: (product: Product) => {
      dispatch({
        type: CART_ACTIONS.ADD_NEW_ITEM,
        payload: {
          item: product,
        },
      });
    },
    incItemAmount: (id: string) => {
      dispatch({
        type: CART_ACTIONS.INC_ITEM_AMOUNT,
        payload: { id },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
