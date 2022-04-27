import styled from "@emotion/styled";
import { FC } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import {
  blueColor,
  darkGrayTextColor,
  grayBorderColor,
} from "../../../../../styles/color";
import AnswerDeleteBtn from "./AnswerDeleteBtn";
import AnswerPatchBtn from "./AnswerPatchBtn";

type Props = {};

const AnswerItem: FC<Props> = () => {
  let content =
    "지원 동기를 모르겠네요... 그냥 좋은 회사인 것 같아 지원하게 되었습니다. 그리고 제가 배달의 민족을 자주 사용하고 있어서 직접 우아한 형제들에서제가 실사용하는 서비스를 직접 개발하면 어떤 느낄일지 궁금했습니다.";
  return (
    <AnswerWrap>
      <p>나의 답변</p>
      <ReactTextareaAutosize
        placeholder="내용을 입력해주세요."
        minRows={3}
        name="box_content"
        defaultValue={content}
      />
      <BtnWrap>
        <AnswerDeleteBtn />
        <AnswerPatchBtn />
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
  justify-content: end;
  gap: 15px;
`;

export default AnswerItem;
