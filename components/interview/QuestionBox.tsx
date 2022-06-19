import styled from "@emotion/styled";
import axios from "axios";
import { FC, useEffect, useRef } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import ReactTextareaAutosize from "react-textarea-autosize";
import AnimationBox from "./animation/AnimationBox";
import ControllBtnBar from "./controllBtn/ControllBtnBar";
import play from "audio-play";
import { useRecoilState, useSetRecoilState } from "recoil";
import { textInterviewAtom } from "../../lib/module/atom/interview";

type Props = {
  question: string;
};

const QuestionBox: FC<Props> = ({ question }) => {
  const videoRef = useRef<any>(null);
  const { listening, transcript } = useSpeechRecognition();
  const [textInterview, setTextInterview] = useRecoilState(textInterviewAtom);

  useEffect(() => {
    const audioPlay = async () => {
      let text = `<speak>${question}</speak>`;

      try {
        const { data } = await axios.post(
          "https://kakaoi-newtone-openapi.kakao.com/v1/synthesize",
          text,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_KEY}`,
              "Content-Type": `application/xml`,
            },
            responseType: "arraybuffer",
          }
        );
        // 1. AudioContext 생성
        const audioContext = new window.AudioContext();

        audioContext.decodeAudioData(data).then((res) => {
          let audio = play(res, {
            end: res.duration,
            autoplay: true,
            volume: 1,
          });

          audio.play();

          let playback = play(res);
          playback.pause();
          playback.play();
        });
      } catch (e) {
        console.log(e);
      }
    };

    audioPlay();
  }, [question]);

  return (
    <QuestionContainer>
      <QuestionText>{question}</QuestionText>
      <AnimationBox />
      <ReactTextareaAutosize
        minRows={5}
        value={transcript}
        placeholder="질문에 대해 음성으로 답변해주시면 XD가 인식하여 변환합니다."
        onChange={(e) =>
          setTextInterview({ ...textInterview, answer: e.target.value })
        }
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
