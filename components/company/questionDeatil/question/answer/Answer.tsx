import styled from "@emotion/styled";
import { FC } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { QuestionAnswerType } from "../../../../../@types/CompanyType";
import { blueColor, darkGrayTextColor } from "../../../../../styles/color";
import AnswerDeleteBtn from "./AnswerDeleteBtn";
import AnswerPatchBtn from "./AnswerPatchBtn";

type Props = {
  answer: QuestionAnswerType;
};

const AnswerItem: FC<Props> = ({ answer }) => {
  return (
    <AnswerWrap>
      <p>나의 답변</p>
      <ReactTextareaAutosize
        placeholder="내용을 입력해주세요."
        minRows={3}
        name="box_content"
        defaultValue={answer.answer}
      />
      <BtnWrap>
        <AnswerDeleteBtn answerId={answer.id} />
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
