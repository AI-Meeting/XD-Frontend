import styled from "@emotion/styled";
import { FC } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import queryKeys from "../../../../../contexts/QueryKey";
import question from "../../../../../lib/api/question";
import { mainColor } from "../../../../../styles/color";

type Props = {
  answerId: number;
  changeAanswer: string;
};

const AnswerPatchBtn: FC<Props> = ({ answerId, changeAanswer }) => {
  const client = useQueryClient();

  const { mutate: patchAanswerMutate } = useMutation(
    queryKeys.patchQuestionAnswer,
    () => question.patchQuestionAnswer(changeAanswer, answerId),
    {
      onSuccess: () => {
        client.invalidateQueries(queryKeys.company);
        toast.success("면접 답변이 수정되었습니다.");
      },
      onError: () => {
        toast.error("면접 답변이 수정에 실패했습니다.");
      },
    }
  );
  return <PatchBtn onClick={() => patchAanswerMutate()}>답변 수정</PatchBtn>;
};

const PatchBtn = styled.button`
  margin-left: 15px;
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
