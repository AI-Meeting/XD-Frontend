import styled from "@emotion/styled";
import React, { FC } from "react";
import ReactPlayer from "react-player";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  videoAtom,
  videoModalAtom,
} from "../../../../../lib/module/atom/interview";
import { mainColor } from "../../../../../styles/color";

const VideoModal: FC = () => {
  const [modalOpen, setModalOpen] = useRecoilState(videoModalAtom);
  const videoUrl = useRecoilValue(videoAtom);

  return (
    <Container modalOpen={modalOpen}>
      <Content>
        <ReactPlayer
          url={`${videoUrl?.split("?")[0]}`} // 플레이어 url
          width="700px" // 플레이어 크기 (가로)
          playing={true} // 자동 재생 on
          muted={true} // 자동 재생 on
          controls={true} // 플레이어 컨트롤 노출 여부
          light={false} // 플레이어 모드
          pip={true} // pip 모드 설
        />
        <StopVideo onClick={() => setModalOpen(false)}>그만보기</StopVideo>
      </Content>
    </Container>
  );
};

const Container = styled.div<{ modalOpen: boolean }>`
  top: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  //display : ${({ modalOpen }) => (modalOpen ? "flex" : "none")}
  opacity: ${({ modalOpen }) => (modalOpen ? "1" : "0")};
  z-index: ${({ modalOpen }) => (modalOpen ? "10" : "-1")}; ;
`;
const Content = styled.div`
  width: 800px;
  height: 500px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 13px rgba(69, 69, 69, 0.25);
  border-radius: 20px;
  flex-direction: column;
`;

const StopVideo = styled.button`
  padding: 10px 30px;
  background: ${mainColor};
  box-shadow: 0px 4px 8px rgba(132, 132, 132, 0.25);
  border-radius: 30px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  margin-top: 20px;
  cursor: pointer;
`;

export default VideoModal;
