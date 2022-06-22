import styled from "@emotion/styled";
import { FC, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useSetRecoilState } from "recoil";
import { QuestionAnswerType } from "../../../../../@types/CompanyType";
import {
  videoAtom,
  videoModalAtom,
} from "../../../../../lib/module/atom/interview";
import {
  blueColor,
  darkGrayTextColor,
  mainColor,
} from "../../../../../styles/color";
import AnswerDeleteBtn from "./AnswerDeleteBtn";
import AnswerPatchBtn from "./AnswerPatchBtn";

type Props = {
  answer: QuestionAnswerType;
};

const AnswerItem: FC<Props> = ({ answer }) => {
  const [changeAanswer, setChangeAanswer] = useState<string>(answer.answer);
  const setModalOpen = useSetRecoilState(videoModalAtom);
  const setVideoUrl = useSetRecoilState(videoAtom);

  return (
    <AnswerWrap>
      <p>나의 답변</p>
      <ReactTextareaAutosize
        placeholder="내용을 입력해주세요."
        minRows={3}
        name="box_content"
        defaultValue={answer.answer}
        onChange={(e) => setChangeAanswer(e.target.value)}
      />

      <BtnWrap>
        <div>
          {answer.videoUrl && (
            <ButtonVideo
              onClick={() => {
                setModalOpen(true);
                setVideoUrl(answer.videoUrl);
              }}
            >
              면접 돌려보기
            </ButtonVideo>
          )}
        </div>
        <div>
          <AnswerDeleteBtn answerId={answer.id} />
          <AnswerPatchBtn answerId={answer.id} changeAanswer={changeAanswer} />
        </div>
      </BtnWrap>
    </AnswerWrap>
  );
};

const AnswerWrap = styled.div`
  margin-top: 30px;

  p {
    font-weight: 500;
    font-size: 14px;
    color: ${blueColor};
  }

  textarea {
    width: 100%;
    margin: 15px 0 25px 0;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #e3e4e3;
    box-sizing: border-box;
    border-radius: 10px;
    color: ${darkGrayTextColor};
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    resize: none;
  }
`;

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
`;

const ButtonVideo = styled.button`
  padding: 0 20px;
  cursor: pointer;
  height: 35px;
  background: ${mainColor};
  color: white;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;

  :hover {
    box-shadow: 0px 4px 8px rgba(180, 180, 180, 0.25);
  }
`;

export default AnswerItem;
