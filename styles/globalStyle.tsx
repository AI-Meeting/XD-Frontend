import { Global, css } from "@emotion/react";

const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  * {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR", sans-serif;
    outline: none;
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
