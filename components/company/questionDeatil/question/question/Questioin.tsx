import styled from "@emotion/styled";
import { FC } from "react";
import { QuetionType } from "../../../../../@types/CompanyType";
import {
  darkBlueColor,
  grayBorderColor,
  mainColor,
} from "../../../../../styles/color";
import AnswerItem from "../answer/Answer";
import NoAnswerText from "../answer/NoAnswerText";

type Props = {
  question: QuetionType;
};

const Question: FC<Props> = ({ question }) => {
  console.log(question);

  return (
    <QuestionWrap>
      <span>
        <strong>Q. </strong>
        {question.question}
      </span>
      {question.questionAnswers.length === 0 ? (
        <NoAnswerText />
      ) : (
        <>
          {question?.questionAnswers?.map((answer) => (
            <AnswerItem key={answer.id} answer={answer} />
          ))}
        </>
      )}
    </QuestionWrap>
  );
};
const QuestionWrap = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  border-bottom: 1px solid ${grayBorderColor};
  strong {
    color: ${mainColor};
  }
  span {
    font-size: 18px;
    color: ${darkBlueColor};
  }
`;

export default Question;
