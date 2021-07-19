import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
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
  @media (max-width: 768px) {
    text-align: center;
  }
`;
