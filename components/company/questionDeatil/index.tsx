import styled from "@emotion/styled";
import { FC } from "react";
import { Container } from "../../../pages/interview";
import { grayBackgroundColor } from "../../../styles/color";
import Question from "./question/question";
import Review from "./question/review";

type Props = {};

const QuestionDetail: FC<Props> = () => {
  return (
    <QuestionContainer>
      <QuestionListBox>
        <Review />
        <QuestionListWrap>
          <h2>면접 질문</h2>
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
        </QuestionListWrap>
      </QuestionListBox>
    </QuestionContainer>
  );
};

const QuestionContainer = styled(Container)`
  background: ${grayBackgroundColor};
  padding: 40px 0;
  box-sizing: border-box;
`;

const QuestionListBox = styled.div`
  margin: 0 auto;
  padding: 40px;
  box-sizing: border-box;
  width: 800px;
  height: auto;
  min-height: 500px;
  background: white;
  border-radius: 10px;
`;

const QuestionListWrap = styled.article`
  margin-top: 40px;

  h2 {
    font-weight: 700;
    font-size: 20px;
  }
`;

export default QuestionDetail;
