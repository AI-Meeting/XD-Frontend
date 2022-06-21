import styled from "@emotion/styled";
import React, { FC } from "react";
import { CompanyReviewType } from "../../../../@types/CompanyReviewType";

interface Props {
  question: string;
  setCompanyReviewValue: React.Dispatch<
    React.SetStateAction<CompanyReviewType>
  >;
  companyReviewValue: CompanyReviewType;
  index: number;
}

const QuestionItem: FC<Props> = ({
  question,
  setCompanyReviewValue,
  companyReviewValue,
  index,
}) => {
  const deleteQuestion = () => {
    const newArr = companyReviewValue.question.filter((_, i) => i !== index);

    setCompanyReviewValue({
      ...companyReviewValue,
      question: newArr,
    });
  };

  return (
    <Container>
      <Question>{question}</Question>
      <MinusButton onClick={deleteQuestion}>
        <img src="/assets/icon/minusQuestionIcon.svg" alt="Minus Question" />
      </MinusButton>
    </Container>
  );
};

export default QuestionItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Question = styled.span`
  width: calc(100% - 40px);
  border-bottom: 1px solid #e3e4e3;
  padding-bottom: 7px;
  color: #6f828c;
  font-size: 14px;
`;

const MinusButton = styled.button`
  width: 26px;
  height: 26px;
  border: 1px solid #909090;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
`;
