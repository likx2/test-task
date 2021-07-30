import React, { Component } from "react";
import { connect } from "react-redux";
import { CURRENCIES, Price, PriceState } from "../../types/price";
import { IProduct } from "../../types/product";
import { GlobalState } from "../../types/state";
import { Card, ProductImg, ProductName, ProductPrice } from "./styles";

interface ProductProps {
  product: IProduct;
  currentCurrency: string;
}

class Product extends Component<ProductProps> {
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
        <ProductName>{this.props.product.name}</ProductName>
        <ProductPrice>{this.getCurrency()}</ProductPrice>
      </Card>
    );
  }
}

const mapStateToProps = (state: GlobalState): PriceState => {
  return {
    currentCurrency: state.price.currentCurrency,
  };
};

export default connect(mapStateToProps, null)(Product);
