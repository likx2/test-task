import React, { Component, MouseEvent } from "react";
import { Container } from "../../styles/Container";
import { NavWrapper, ChooseCategoryBtn } from "./styles";
import { ReactComponent as Logo } from "../../assets/images/a-logo.svg";
import { ReactComponent as Currency } from "../../assets/images/dollar.svg";
import { CATEGORIES } from "../../types/product";
import { connect } from "react-redux";
import { changeCategory } from "../../store/action-creators/changeCategory";
import { ChangeCategoryAction } from "../../types/product";
import { GlobalState } from "../../types/state";

interface NavbarComponentProps {
  currentCategory: string;
  changeCategory: (category: string) => ChangeCategoryAction;
}

class Navbar extends Component<NavbarComponentProps> {
  constructor(props: NavbarComponentProps) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.props.changeCategory(e.currentTarget.textContent as string);
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
              >
                {CATEGORIES[0]}
              </ChooseCategoryBtn>
              <ChooseCategoryBtn
                onClick={this.clickHandler}
                active={this.props.currentCategory === CATEGORIES[1]}
              >
                {CATEGORIES[1]}
              </ChooseCategoryBtn>
            </div>
            <Logo />
            <div>
              <Currency />
            </div>
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
    changeCategory: (category: string) => dispatch(changeCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
