import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import { redColor } from "../../../styles/color";

type Props = {
  type: string;
  interviewId: number;
};

const InterviewStateBtn = ({ type, interviewId }: Props) => {
  const router = useRouter();

  const routerClickHandle = (path: number) => {
    router.push(`/interview/${path}`);
  };
  return (
    <StateBtnBox onClick={() => routerClickHandle(interviewId)}>
      {type}
    </StateBtnBox>
  );
};

const StateBtnBox = styled.button`
  width: 150px;
  height: 30px;
  background: ${redColor};
  color: white;
  border-radius: 5px;
  font-size: 12px;
`;

export default InterviewStateBtn;
