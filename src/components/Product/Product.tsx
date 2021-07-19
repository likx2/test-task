import React, { Component } from "react";
import { IProduct } from "../../types/product";
import { ProductImg, ProductName } from "./styles";

interface ProductProps {
  product: IProduct;
}

export default class Product extends Component<ProductProps> {
  componentDidMount() {
    console.log(this.props.product.prices);
  }

  render() {
    return (
      <div>
        <ProductImg src={this.props.product.gallery[0]} alt="" />
        <ProductName>{this.props.product.name}</ProductName>
      </div>
    );
  }
}
