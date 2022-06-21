import styled from "@emotion/styled";
import Image from "next/image";
import { FC, useCallback, useEffect, useState } from "react";
import SpeechRecognition from "react-speech-recognition";
import { useRecoilState } from "recoil";
import { stopModalAtom } from "../../../lib/module/atom/interview";
import { redColor } from "../../../styles/color";

type Props = {
  listening: any;
  videoRef: any;
};

const ControllBtnBar: FC<Props> = ({ listening, videoRef }) => {
  const [modalOpen, setModalOpen] = useRecoilState(stopModalAtom);
  const [videoControll, setVideoControll] = useState(false);
  const constraints = { audio: false, video: true };

  const handleVideoOn = () => setVideoControll(!videoControll);

  const handleSTTListener = useCallback(() => {
    SpeechRecognition.startListening({ language: "ko", continuous: true });
  }, []);

  const handleSTTStopListening = useCallback(() => {
    SpeechRecognition.stopListening();
  }, []);

  const videoStart = () => {
    let mediaRecorder = null;
  };

  const stopInterviewHandle = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    let mediaData = [];
    let recordedVideoURL = null;
    let mediaRecorder = null;
    let videoBlob = null;

    const videoOnOff = () => {
      navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
        // 카메라 켜기
        videoRef.current.srcObject = mediaStream;

        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
        };

        if (!videoControll) {
          mediaStream.getTracks().forEach((track) => track.stop());
        }

        // // 카메라 녹화
        // mediaRecorder = new MediaRecorder(mediaStream, {
        //   mimeType: "video/webm; codecs=vp9",
        // });

        // console.log(mediaRecorder);

        // mediaRecorder.ondataavailable = (event) => {
        //   if (event.data && event.data.size > 0) {
        //     mediaData.push(event.data);
        //   }
        // };

        // mediaRecorder.onstop = () => {
        //   videoBlob = new Blob(mediaData, { type: "video/webm" });
        //   recordedVideoURL = window.URL.createObjectURL(videoBlob);
        //   console.log("video capture end", recordedVideoURL);
        // };

        // 4. 녹화 시작
        //  mediaRecorder.start();
      });
    };

    const VideoCaptureEnd = () => {
      if (mediaRecorder) {
        // 5) 녹화 중지
        mediaRecorder.stop();
        mediaRecorder = null;
      }
    };

    videoOnOff();
  }, [videoControll]);

  return (
    <Container>
      <BtnWrapper>
        <button onClick={handleVideoOn}>
          {videoControll ? (
            <Image
              src={`/assets/icon/onVideoIcon.svg`}
              width={20}
              height={13}
              alt="비디오 아이콘"
            />
          ) : (
            <Image
              src={`/assets/icon/offVideoIcon.svg`}
              width={20}
              height={19}
              alt="비디오 아이콘"
            />
          )}
        </button>
        {listening ? (
          <button onClick={handleSTTStopListening}>
            <Image
              src={`/assets/icon/onMicIcon.svg`}
              width={15}
              height={20}
              alt="비디오 아이콘"
            />
          </button>
        ) : (
          <button onClick={handleSTTListener}>
            <Image
              src="/assets/icon/offMicIcon.svg"
              width={15}
              height={20}
              alt="마이크 아이콘"
            />
          </button>
        )}
      </BtnWrapper>
      <button className="end_btn" onClick={stopInterviewHandle}>
        종료
      </button>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 3%;
  padding: 20px;
  width: 300px;
  height: 60px;
  background: rgba(255, 255, 255, 0.49);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  .end_btn {
    padding: 5px 20px;
    width: fit-content;
    font-weight: 500;
    font-size: 14px;
    color: white;
  }

  button {
    width: 40px;
    height: 40px;
    background: #6f828c;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
      background-color: ${redColor};
    }
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default ControllBtnBar;
