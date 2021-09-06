import { createGlobalStyle } from "styled-components";

export const COLORS = {
  primary: "#5ECE7B",
  white: "#fff",
  black: "#1D1F22",
  error: "#e84118",
};

export const FONT_SIZES = {
  s: "16px",
  m: "30px",
  l: "32px",
};

export const MEDIAS = {
  s: "576px",
  m: "768px",
  l: "1024px",
};

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --c-primary:${COLORS.primary};
  --c-white:${COLORS.white};
  --c-black:${COLORS.black};
  --c-error:${COLORS.error};
  --font-size-s:${FONT_SIZES.s};
  --font-size-m:${FONT_SIZES.m};
  --font-size-l:${FONT_SIZES.l};

}
body {
  font-family: 'Raleway', sans-serif;
  color:var(---c-black)
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
