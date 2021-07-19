import React, { Component } from "react";
import { fetchProducts } from "../../store/action-creators/fetchProducts";
import { connect } from "react-redux";
import { GlobalState } from "../../types/state";
import { IProduct } from "../../types/product";
import { Container } from "../../styles/Container";
import Product from "../Product";
import { Error, Title, Wrapper } from "./styles";

interface MainComponentProps {
  products: IProduct[];
  currentCategory: string;
  loading: boolean;
  fetchProducts: () => void;
  error: string;
}

class Main extends Component<MainComponentProps> {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    if (this.props.loading)
      return (
        <Container>
          <h1>Loading...</h1>
        </Container>
      );

    if (this.props.error)
      return (
        <Container>
          <Error>{this.props.error}</Error>
        </Container>
      );

    return (
      <>
        <Container>
          <Title>{this.props.currentCategory}</Title>
          <Wrapper>
            {this.props.products
              .filter(
                (product) => product.category === this.props.currentCategory
              )
              .map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </Wrapper>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {
    products: state.product.products,
    currentCategory: state.product.currentCategory,
    loading: state.product.loading,
    error: state.product.error,
    gallery: state.product.gallery,
  };
};

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
