import styled from "@emotion/styled";
import { FC, KeyboardEvent, useCallback, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ReactTextareaAutosize from "react-textarea-autosize";
import {
  circle1Animation,
  circle2Animation,
  circle3Animation,
  circle4Animation,
} from "./animation";

const QuestionBox: FC = () => {
  const { listening, transcript } = useSpeechRecognition();

  const handleSTTListener = useCallback(() => {
    SpeechRecognition.startListening({ language: "ko", continuous: true });
  }, []);

  const handleSTTStopListening = useCallback(() => {
    SpeechRecognition.stopListening();
  }, []);

  const handleSubmitReview = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.shiftKey) {
        return;
      }

      if (event.key === "Enter") {
        if (window.confirm("리뷰를 작성하시겠습니까?")) {
          handleSTTStopListening();
        }
      }
    },
    [handleSTTStopListening]
  );

  return (
    <QuestionContainer>
      <QuestionText>
        대마고에 지원한 동기가 어떻게 되신가요? 그리고 앞으로의 꿈은 어떤 것
        인가요?
      </QuestionText>
      <AnimationBox>
        <div className="circle_box" id="circle1" />
        <div className="circle_box" id="circle2" />
        <div className="circle_box" id="circle3" />
        <div className="circle_box" id="circle4" />
      </AnimationBox>
      <ReactTextareaAutosize
        minRows={5}
          value={transcript}
        placeholder="질문에 대해 음성으로 답변해주시면 XD가 인식하여 변환합니다."
      />
      {listening ? (
        <button
          className="mic"
          style={{ width: "15px", marginRight: "20px" }}
          onClick={handleSTTStopListening}
        >
          sdf
        </button>
      ) : (
        <button className="mic" onClick={handleSTTListener}>
          sdfsf
        </button>
      )}
    </QuestionContainer>
  );
};

const QuestionContainer = styled.section`
  width: 50%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & textarea {
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
    background: none;
    resize: none;
    text-align: center;

    ::placeholder {
      color: #ffffff85;
    }
  }
`;

const AnimationBox = styled.article`
  margin: 50px 0 100px 0;
  position: relative;
  display: flex;
  justify-content: center;

  .circle_box {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    top: 0;
    position: relative;
  }

  #circle1 {
    background: rgba(153, 255, 249, 0.29);
    right: -114px;
    top: -25px;
    z-index: 1;
    animation: ${circle1Animation} 7s infinite;
  }
  #circle2 {
    background: rgba(55, 52, 210, 0.47);
    top: 14px;
    right: -85px;
    animation: ${circle2Animation} 7s infinite;
  }
  #circle3 {
    background: rgba(81, 78, 246, 0.29);
    right: 51px;
    top: 25px;
    animation: ${circle3Animation} 7s infinite;
  }
  #circle4 {
    background: rgba(114, 84, 197, 0.38);
    right: 108px;
    animation: ${circle4Animation} 7s infinite;
  }
`;

const AnswerInputBox = styled.input``;

const QuestionText = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: white;
  text-align: center;
`;

export default QuestionBox;
