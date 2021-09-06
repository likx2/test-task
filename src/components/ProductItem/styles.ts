import styled from "styled-components";
import { ReactComponent as Cart } from "../../assets/images/cart_circle.svg";
import { MEDIAS } from "../../styles/GlobalStyles";

export const Card = styled.div`
  padding: 16px;
  background-color: var(--c-white);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    svg {
      opacity: 1;
    }
  }

  @media (max-width: ${MEDIAS.m}) {
    &:hover {
      box-shadow: none;
      svg {
        opacity: 1;
      }
    }
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 338px;
  object-fit: contain;
  object-position: center;
`;
export const ProductName = styled.p`
  position: relative;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  margin: 24px 0 0;

  @media (max-width: ${MEDIAS.m}) {
    text-align: center;
  }
`;

export const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;

  @media (max-width: ${MEDIAS.m}) {
    text-align: center;
  }
`;

export const CartCircle = styled(Cart)`
  position: absolute;
  opacity: 0;
  top: -24px;
  transform: translateY(-50%);
  right: 30px;
  width: 52px;
  height: 52px;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: ${MEDIAS.m}) {
    opacity: 1;
  }
`;
