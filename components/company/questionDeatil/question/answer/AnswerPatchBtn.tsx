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
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: 3px 5px 12px rgba(180, 180, 180, 0.35);
  }
`;

export default AnswerPatchBtn;
