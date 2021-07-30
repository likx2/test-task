import React, { Component, MouseEvent } from "react";
import { connect } from "react-redux";
import { changeCurrency } from "../../store/action-creators/changeCurrency";
import { CURRENCIES, PriceState } from "../../types/price";
import { GlobalState } from "../../types/state";
import { Arrow, DFlex, Menu } from "./styles";

class Currency extends Component<any, { isActive: boolean }> {
  state = { isActive: false };

  constructor(props: any) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    // console.log(props);
  }

  toggleMenu(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    this.setState({ isActive: !this.state.isActive });
  }

  changeCurrency(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    this.props.dispatch(changeCurrency(e.currentTarget.value));

    this.setState((prev: { isActive: boolean }) => ({
      isActive: false,
    }));
  }

  getSignOfCurrentCurrency() {
    return CURRENCIES.find(
      (currency) => currency.name === this.props.currentCurrency
    )?.sign;
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <DFlex onClick={this.toggleMenu}>
          {this.getSignOfCurrentCurrency()}
          <Arrow />
        </DFlex>
        {this.state.isActive ? (
          <Menu>
            {CURRENCIES.map((currency) => (
              <button
                key={currency.name}
                onClick={this.changeCurrency}
                value={currency.name}
              >
                {`${currency.sign} ${currency.name}`}
              </button>
            ))}
          </Menu>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state: GlobalState): PriceState => {
  return {
    currentCurrency: state.price.currentCurrency,
  };
};

export default connect(mapStateToProps, null)(Currency);
