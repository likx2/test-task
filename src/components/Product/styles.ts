import styled from "styled-components";

export const Card = styled.div`
  padding: 16px;
  background-color: #fff;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;
export const ProductImg = styled.img`
  width: 100%;
  height: 338px;
  object-fit: contain;
  object-position: center;
`;
export const ProductName = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  margin: 24px 0 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
