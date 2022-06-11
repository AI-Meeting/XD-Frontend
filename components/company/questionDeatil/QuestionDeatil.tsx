import styled from "@emotion/styled";
import { FC } from "react";
import { CompanyType } from "../../../@types/CompanyType";
import { Container } from "../../../pages/interview";
import { grayBackgroundColor } from "../../../styles/color";
import Question from "./question/question/Questioin";
import Review from "./question/review/Review";

type Props = {
  companyData: CompanyType;
};

const QuestionDetail: FC<Props> = ({ companyData }) => {
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

const QuestionContainer = styled.section`
  position: relative;
  top: -100px;
  padding: 20px 0;
  box-sizing: border-box;
  border-top: 1px solid #e3e4e3;
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
  border: 1px solid #e3e4e3;
  border-radius: 3px;
  border: 1px solid #f0f0f0;
`;

const QuestionListWrap = styled.article`
  margin-top: 40px;

  h2 {
    font-weight: 700;
    font-size: 20px;
  }
`;

export default QuestionDetail;
