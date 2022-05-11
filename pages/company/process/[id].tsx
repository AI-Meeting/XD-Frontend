import styled from "@emotion/styled";
import { NextPage } from "next";
import QuestionContent from "../../../components/interview/Interview";
import { backgroundAnimation } from "../../../components/interview/animation/animation";

const InterviewProcess: NextPage = () => {
  return (
    <ProcessContainer>
      <QuestionContent />
    </ProcessContainer>
  );
};

const ProcessContainer = styled.div`
  background-size: 800% 800%;
  background: linear-gradient(137deg, #f77c99, #6578f2, #4f5ff5, #579880);
  animation: ${backgroundAnimation} 16s linear infinite;
`;

export default InterviewProcess;
