import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FC, MouseEvent, useRef } from "react";
import { useRecoilState } from "recoil";
import { stopModalAtom } from "../../../lib/module/atom/interview";
import { blueColor, mainColor, redColor } from "../../../styles/color";

const InterviewStopModal: FC = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useRecoilState(stopModalAtom);
  const checkBoxRef = useRef<any>(null);

  const stopHandle = (e: MouseEvent) => {
    if (checkBoxRef.current.checked) {
      e.preventDefault();
      setModalOpen(false);
      router.push(`/interview`);
    }
  };

  const cancelHandle = (e: MouseEvent) => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <ModalContainer modalOpen={modalOpen}>
      <ModalBox>
        <ModalContent>
          <h2>면접 수고하셨어요 😊</h2>
          <p> 마이페이지에서 나의 면접을 다시 볼 수 있어요!</p>
          <CheckBox>
            <input ref={checkBoxRef} type="checkbox" required />
            <span>다시 방문하기 약속 👍🏻</span>
          </CheckBox>
        </ModalContent>
        <ButtonContainer>
          <button onClick={(e) => cancelHandle(e)}>취소</button>
          <button onClick={(e) => stopHandle(e)}>확인</button>
        </ButtonContainer>
      </ModalBox>
    </ModalContainer>
  );
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalContainer = styled.div<{ modalOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ modalOpen }) => (modalOpen ? "1" : "0")};
  z-index: ${({ modalOpen }) => (modalOpen ? "10" : "-1")}; ;
`;

const ModalBox = styled.form`
  padding: 30px 40px 20px 40px;
  box-sizing: border-box;
  width: 380px;
  height: 220px;
  background: #ffffff;
  box-shadow: 0px 2px 13px rgba(69, 69, 69, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & p,
  span {
    font-weight: 500;
    font-size: 14px;
    color: ${blueColor};
  }
`;

const CheckBox = styled.div`
  margin-top: 15px;
  align-items: center;
  display: flex;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    padding: 10px 60px;
    background: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 15px;
    transition: all 0.3s;

    :first-child {
      color: ${redColor};
    }

    :last-child {
      color: ${mainColor};
    }

    :hover {
      background: #f1f1f1;
    }
  }
`;

export default InterviewStopModal;
