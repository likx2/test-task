import styled from "styled-components";

export const NavWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChooseCategoryBtn = styled.button<{ active: boolean }>`
  padding: 28px 16px 32px 16px;
  text-transform: uppercase;
  font-size: var(--small);
  color: ${(props) => (props.active ? " var(--c-primary)" : "var(--c-black)")};
  transition: all 0.1s ease-in-out;
  border-bottom: ${(props) =>
    props.active ? " 2px solid var(--c-primary)" : ""};
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;
