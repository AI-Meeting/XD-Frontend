import styled from "@emotion/styled";
import { NextPage } from "next";
import { useRouter } from "next/router";
import ArrowBtn from "../../../components/interview/arrowBtn/ArrowBtn";
import { backgroundAnimation } from "../../../components/interview/question/animation";
import QuestionBox from "../../../components/interview/question/QuestionBox";

const InterviewProcess: NextPage = () => {
  const router = useRouter();
  const companyId: number = parseInt(router.query.id as string);
  const questionId: number = parseInt(router.query.questionId as string);

  const leftBtnClickHandle = () => {
    router.push(`/company/process/${companyId}?questionId=${questionId - 1}`);
  };

  const rightBtnClickHandle = () => {
    router.push(`/company/process/${companyId}?questionId=${questionId + 1}`);
  };

  return (
    <ProcessContainer>
      <div className="background_container">
        <ArrowBtn driection="left" btnClickHandle={leftBtnClickHandle} />
        <QuestionBox />
        <ArrowBtn driection="rigth" btnClickHandle={rightBtnClickHandle} />
      </div>
    </ProcessContainer>
  );
};

const ProcessContainer = styled.div`
  background-size: 800% 800%;
  background: linear-gradient(137deg, #f77c99, #6578f2, #4f5ff5, #579880);
  animation: ${backgroundAnimation} 16s linear infinite;

  .background_container {
    background: linear-gradient(-45deg, #fff6b7, #2ebea4, #23a6d5, #23d5ab);
    top: 35%;
    background-size: 400% 400%;
    animation: ${backgroundAnimation} 15s linear infinite;
    width: 100%;
    height: 100vh;
    gap: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export default InterviewProcess;
