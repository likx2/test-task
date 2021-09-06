import styled, { keyframes } from "styled-components";
import { ReactComponent as Icon } from "../../assets/images/vector.svg";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 22px 0 0;
`;
export const DFlex = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

const fade = keyframes`
  from{
   opacity:0;
  }
  to{
    opacity:1;
  }
`;

export const Menu = styled.div`
  min-width: 120px;
  position: absolute;
  left: 0;
  transform: translateX(-40%);
  padding: 20px 40px 20px 20px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  background-color: var(--c-white);
  animation: ${fade} linear 0.2s;
  z-index: 1;

  button {
    font-size: 18px;
    font-weight: 500;
    padding: 1px;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:nth-of-type(n + 2) {
      margin: 21px 0 0;
    }

    &:hover {
      color: var(--c-primary);
    }
  }
`;

export const Arrow = styled(Icon)`
  display: block;
  margin: 0 0 0 10px;
`;
