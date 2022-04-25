import styled from "@emotion/styled";
import { mainColor } from "../../../../../styles/color";

const AnswerPatchBtn = () => {
  return <PatchBtn>답변 수정</PatchBtn>;
};

const PatchBtn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 35px;
  background: ${mainColor};
  color: white;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;

  :hover {
    box-shadow: 0px 4px 8px rgba(180, 180, 180, 0.25);
  }
`;

export default AnswerPatchBtn;
