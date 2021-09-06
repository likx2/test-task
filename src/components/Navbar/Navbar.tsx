import React, { Component, MouseEvent } from "react";
import { Container } from "../../styles/Container";
import { NavWrapper, ChooseCategoryBtn, RightWrapper } from "./styles";
import { ReactComponent as Logo } from "../../assets/images/a-logo.svg";
import Currency from "../Currency";
import { CATEGORIES } from "../../types/product";
import { connect } from "react-redux";
import { changeCategory } from "../../store/action-creators/changeCategory";
import { ChangeCategoryAction } from "../../types/product";
import { GlobalState } from "../../types/state";
import CartOverlay from "../CartOverlay";

interface NavbarComponentProps {
  currentCategory: string;
  changeCurrentCategory: (category: string) => ChangeCategoryAction;
}

class Navbar extends Component<NavbarComponentProps> {
  constructor(props: NavbarComponentProps) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.props.changeCurrentCategory(e.currentTarget.id);
  }

  render() {
    return (
      <nav>
        <Container>
          <NavWrapper>
            <div>
              <ChooseCategoryBtn
                onClick={this.clickHandler}
                active={this.props.currentCategory === CATEGORIES[0]}
                id={CATEGORIES[0]}
              >
                {CATEGORIES[0]}
              </ChooseCategoryBtn>
              <ChooseCategoryBtn
                onClick={this.clickHandler}
                active={this.props.currentCategory === CATEGORIES[1]}
                id={CATEGORIES[1]}
              >
                {CATEGORIES[1]}
              </ChooseCategoryBtn>
            </div>
            <Logo />
            <RightWrapper>
              <Currency />
              <CartOverlay />
            </RightWrapper>
          </NavWrapper>
        </Container>
      </nav>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {
    currentCategory: state.product.currentCategory,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeCurrentCategory: (category: string) =>
      dispatch(changeCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
