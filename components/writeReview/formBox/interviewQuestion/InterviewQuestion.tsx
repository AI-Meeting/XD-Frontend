import styled from "@emotion/styled";
import React, { FC, useState } from "react";
import { CompanyReviewType } from "../../../../@types/CompanyReviewType";
import QuestionItem from "./QuestionItem";

interface Props {
  question: string[];
  setCompanyReviewValue: React.Dispatch<
    React.SetStateAction<CompanyReviewType>
  >;
  companyReviewValue: CompanyReviewType;
}

const InterviewQuestion: FC<Props> = ({
  question,
  setCompanyReviewValue,
  companyReviewValue,
}) => {
  const [questionInputValue, setQuestionInputValue] = useState<string>("");

  const addQuestionValue = () => {
    if (questionInputValue.replace(/ /g, "") !== "") {
      setCompanyReviewValue({
        ...companyReviewValue,
        question: [...question, questionInputValue],
      });
      setQuestionInputValue("");
    } else {
      alert("면접 질문을 입력한 후 추가해주세요.");
    }
  };

  return (
    <Container>
      <Header>
        <h2>면접 질문</h2>
        <p>{question.length}개</p>
      </Header>
      <Description>면접 질문은 최대한 자연스럽게 입력해주세요.</Description>
      <QuestionContainer>
        {question.map((question: string, i: number) => (
          <QuestionItem
            question={question}
            key={i}
            index={i}
            setCompanyReviewValue={setCompanyReviewValue}
            companyReviewValue={companyReviewValue}
          />
        ))}
        <AddQuestion>
          <QuestionInput
            placeholder="면접질문을 입력해주세요."
            value={questionInputValue}
            onChange={(e) => setQuestionInputValue(e.target.value)}
          />
          <AddButton onClick={addQuestionValue}>
            <img src="/assets/icon/addIcon.svg" alt="addIcon" />
          </AddButton>
        </AddQuestion>
      </QuestionContainer>
    </Container>
  );
};

export default InterviewQuestion;

const Container = styled.div`
  margin-top: 30px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;

  & h2 {
    display: inline;
    font-size: 16px;
    color: #5f5f5f;
    font-weight: normal;
  }

  & p {
    display: inline;
    font-size: 12px;
    color: #6f828c;
    margin-left: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  margin-top: 15px;
  padding: 15px 9px;
  background-color: #f4f9fd;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 12px;
  color: #6f828c;
`;

const QuestionContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 80px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const AddQuestion = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuestionInput = styled.input`
  width: calc(100% - 40px);
  border-bottom: 1px solid #e3e4e3;
  padding-bottom: 7px;
  color: #6f828c;
  font-size: 14px;
`;

const AddButton = styled.button`
  width: 26px;
  height: 26px;
  border: 1px solid #63ba6c;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
`;
