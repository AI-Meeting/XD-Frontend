import styled from "@emotion/styled";
import { NextPage } from "next";
import ArrowBtn from "../../components/interview/arrowBtn/ArrowBtn";
import QuestionBox from "../../components/interview/question/QuestionBox";

const InterviewProcess: NextPage = () => {
  return (
    <ProcessContainer>
      <ArrowBtn driection="left" />
      <QuestionBox />
      <ArrowBtn driection="rigth" />
    </ProcessContainer>
  );
};

const ProcessContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(113.79deg, #4f5ff5 -66.15%, #579880 90.5%);
  gap: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default InterviewProcess;
