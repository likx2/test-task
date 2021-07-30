import { createGlobalStyle } from "styled-components";

export const COLORS = {
  green: "#5ECE7B",
};

export const SIZES = {
  small: "16px",
};

export const MEDIAS = {
  s: "512px",
  m: "720px",
  l: "1024px",
};

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --green:${COLORS.green};
  --small:${SIZES.small}
}
body {
  font-family: 'Raleway', sans-serif;
}

a,input,button,textarea {
    text-decoration:none;
    border:none;
    background: none;
    cursor: pointer;
    &:focus,&:active{
      outline: none
      
    }
  }
`;

export default GlobalStyles;
