import styled from "@emotion/styled";
import { FC } from "react";
import { blueColor } from "../../../../../styles/color";

type Props = {};

const NoAnswerText: FC<Props> = () => {
  return (
    <AnswerWrap>
      <p>나의 답변</p>
      <p>작성된 답변이 없습니다. 면접을 진행해주세요.</p>
    </AnswerWrap>
  );
};

const AnswerWrap = styled.div`
  margin-top: 30px;

  p {
    font-weight: 500;
    font-size: 14px;
    color: ${blueColor};
  }
  p:nth-of-type(2) {
    padding: 70px;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #aaaaaa;
  }
`;

export default NoAnswerText;
