import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import InterviewStopModal from "../common/modal/InterviewStopModal";
import ArrowBtn from "./controllBtn/ArrowBtn";
import { backgroundAnimation } from "./animation/animation";
import QuestionBox from "./QuestionBox";
import { useCompany } from "../../queries/Question";

type Props = {};

const QuestionContent: FC<Props> = () => {
  const router = useRouter();
  const companyId: number = parseInt(router.query.id as string);
  const questionId: number = parseInt(router.query.questionId as string);
  const [content, setContent] = useState<string>("");

  const { data: companyData } = useCompany(Number(companyId));

  const leftBtnClickHandle = () => {
    router.push(`/company/process/${companyId}?questionId=${questionId - 1}`);
  };

  const rightBtnClickHandle = () => {
    router.push(`/company/process/${companyId}?questionId=${questionId + 1}`);
  };

  useEffect(() => {
    setContent(
      companyData?.data?.question.filter(
        (question) => question.id === questionId
      )[0]?.question
    );
  }, [companyData?.data?.question, questionId]);

  return (
    <ProcessContainer>
      <InterviewStopModal />
      <ArrowBtn driection="left" btnClickHandle={leftBtnClickHandle} />
      <QuestionBox question={content} />
      <ArrowBtn driection="rigth" btnClickHandle={rightBtnClickHandle} />
    </ProcessContainer>
  );
};

const ProcessContainer = styled.main`
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
`;

export default QuestionContent;
