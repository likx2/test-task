import React, { Component } from "react";
import { CartIcon, DropDown } from "./styles";

export default class CartOverlay extends Component {
  render() {
    return (
      <>
        <CartIcon />
        <DropDown />
      </>
    );
  }
}
