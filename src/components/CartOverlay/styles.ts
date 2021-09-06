import styled from "styled-components";
import { ReactComponent as Cart } from "../../assets/images/empty_cart.svg";

export const CartIcon = styled(Cart)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 325px;
  height: 540px;
  background-color: var(--c-white);
  padding: 8px 16px 20px 16px;
`;
