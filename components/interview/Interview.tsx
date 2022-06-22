import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import InterviewStopModal from "../common/modal/InterviewStopModal";
import ArrowBtn from "./controllBtn/ArrowBtn";
import { backgroundAnimation } from "./animation/animation";
import QuestionBox from "./QuestionBox";
import { useCompany } from "../../queries/Question";
import { useRecoilState } from "recoil";
import { textInterviewAtom } from "../../lib/module/atom/interview";
import { useMutation } from "react-query";
import question from "../../lib/api/question/index";
import { toast } from "react-toastify";
import { useSpeechRecognition } from "react-speech-recognition";

type Props = {};

const QuestionContent: FC<Props> = () => {
  const router = useRouter();
  const companyId: number = parseInt(router.query.id as string);
  const questionId: number = parseInt(router.query.questionId as string);
  const [content, setContent] = useState<string>("");
  const [textInterview, setTextInterview] = useRecoilState(textInterviewAtom);
  const { listening, transcript, resetTranscript } = useSpeechRecognition();

  const { data: companyData } = useCompany(Number(companyId));

  const leftBtnClickHandle = () => {
    interviewMutation();
    router.push(`/company/process/${companyId}?questionId=${questionId - 1}`);
  };

  const rightBtnClickHandle = () => {
    console.log(questionId);

    interviewMutation();
    router.push(`/company/process/${companyId}?questionId=${questionId + 1}`);
  };

  const { mutate: interviewMutation } = useMutation(
    () =>
      question.postQuestionAnswer(
        textInterview,
        questionId,
        Number(router.query.id)
      ),
    {
      onSuccess: () => {
        toast.success("인터뷰가 저장되었습니다.");
        setTextInterview(null);
        resetTranscript();
      },
      onError: () => {
        toast.error("인터뷰가 저장에 실패했습니다.");
        setTextInterview(null);
        resetTranscript();
      },
    }
  );

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
      <QuestionBox
        question={content}
        listening={listening}
        transcript={transcript}
      />
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
