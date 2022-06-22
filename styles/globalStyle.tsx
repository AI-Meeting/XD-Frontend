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

  .marker-container {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    top: -97px;
    left: 0;
  }

  .marker-icon {
    margin-top: 3px;
    width: 20px;
    height: 27px;
  }

  .marker-back {
    background-color: #514ef6;
    border-radius: 10px;
    padding: 10px;
    box-sizing: content-box;
  }

  .marker-info {
    display: flex;
    align-items: center;
  }

  .marker-name {
    font-size: 16px;
    color: white;
    font-weight: bold;
  }

  .marker-field {
    font-size: 12px;
    color: #e3e3e3;
    margin-left: 4px;
  }

  .marker-level {
    display: flex;
    align-items: center;
    margin-top: 3px;

    span {
      font-size: 14px;
      font-weight: bold;
      color: white;
      margin-left: 3px;
    }
  }

  .marker-back-hover {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    box-sizing: content-box;
  }

  .marker-name-hover {
    font-size: 16px;
    color: black;
    font-weight: bold;
  }

  .marker-field-hover {
    font-size: 12px;
    color: #a6a6a6;
    margin-left: 4px;
  }

  .marker-level-hover {
    display: flex;
    align-items: center;
    margin-top: 3px;

    span {
      font-size: 14px;
      font-weight: bold;
      color: black;
      margin-left: 3px;
    }
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
