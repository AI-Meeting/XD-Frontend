import styled from "@emotion/styled";
import { darkBlueColor } from "../../../../../styles/color";

const Review = () => {
  return (
    <ReviewContainer>
      <h2>Silverbeen님의 한마디</h2>
      <span>
        와 진짜 너어어어ㅓㅇ무 어려워요 ㅠㅠㅠㅠㅠㅠ 여러분 공부 많이 ㅎㅏ세요
        진짜..... 이미 떨어졌슴다 전...
      </span>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.article`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 20px;
  }

  span {
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    color: ${darkBlueColor};
  }
`;

export default Review;
