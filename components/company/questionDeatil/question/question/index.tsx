import styled from "@emotion/styled";
import { FC } from "react";
import {
  darkBlueColor,
  grayBorderColor,
  mainColor,
} from "../../../../../styles/color";
import AnswerItem from "../answer";

type Props = {};

const Question: FC<Props> = () => {
  return (
    <QuestionWrap>
      <div className="question_box">
        <strong>Q. </strong>
        <span>저희 우아한 형제들에 지원한 동기가 계신가요?</span>
      </div>
      <AnswerItem />
    </QuestionWrap>
  );
};
const QuestionWrap = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  border-bottom: 1px solid ${grayBorderColor};

  .question_box {
    strong {
      color: ${mainColor};
    }
    span {
      font-size: 18px;
      color: ${darkBlueColor};
    }
  }
`;

export default Question;
