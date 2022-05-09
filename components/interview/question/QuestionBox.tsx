import styled from "@emotion/styled";
import { FC, useRef } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import ReactTextareaAutosize from "react-textarea-autosize";
import AnimationBox from "./AnimationBox";
import ControllBtnBar from "./ControllBtnBar";

const QuestionBox: FC = () => {
  const videoRef = useRef<any>(null);
  const { listening, transcript } = useSpeechRecognition();

  // const handleSubmitReview = useCallback(
  //   (event: KeyboardEvent<HTMLTextAreaElement>) => {
  //     if (event.shiftKey) {
  //       return;
  //     }

  //     if (event.key === "Enter") {
  //       if (window.confirm("리뷰를 작성하시겠습니까?")) {
  //         handleSTTStopListening();
  //       }
  //     }
  //   },
  //   [handleSTTStopListening]
  // );

  return (
    <QuestionContainer>
      <QuestionText>
        대마고에 지원한 동기가 어떻게 되신가요? 그리고 앞으로의 꿈은 어떤 것
        인가요?
      </QuestionText>
      <AnimationBox />
      <ReactTextareaAutosize
        minRows={5}
        value={transcript}
        placeholder="질문에 대해 음성으로 답변해주시면 XD가 인식하여 변환합니다."
      />
      <VideoItem ref={videoRef} />
      <ControllBtnBar listening={listening} videoRef={videoRef} />
    </QuestionContainer>
  );
};

const QuestionContainer = styled.section`
  width: 50%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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

const AnswerInputBox = styled.input``;

const QuestionText = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: white;
  text-align: center;
`;

const VideoItem = styled.video`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
  width: 400px;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
`;

export default QuestionBox;
