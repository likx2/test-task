import styled from "styled-components";
import { MEDIAS } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(386px, 1fr));
  column-gap: 40px;
  row-gap: 103px;

  @media (max-width: ${MEDIAS.m}) {
    grid-template-columns: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  line-height: 160%;
  font-weight: normal;
  text-transform: capitalize;
  margin: 80px 0 103px 0;
`;

export const Error = styled.h2`
  text-align: center;
  margin: 30px 0 0;
  color: var(--c-error);
`;
