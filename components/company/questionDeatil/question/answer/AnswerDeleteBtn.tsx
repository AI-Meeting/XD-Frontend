import styled from "@emotion/styled";
import { FC } from "react";
import { mainColor } from "../../../../../styles/color";

const AnswerDeleteBtn: FC = () => {
  return <DeleteBtn>답변 삭제</DeleteBtn>;
};

const DeleteBtn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 35px;
  border: 1px solid ${mainColor};
  color: ${mainColor};
  box-sizing: border-box;
  border-radius: 30px;
  background: white;
  transition: all 0.2s ease-in-out;

  :hover {
    box-shadow: 0px 4px 8px rgba(180, 180, 180, 0.25);
  }
`;

export default AnswerDeleteBtn;
