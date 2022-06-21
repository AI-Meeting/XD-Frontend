import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import {
  blueColor,
  mainColor,
  redColor,
  subMainColor,
} from "../../../styles/color";

type Props = {
  type: string;
  interviewId?: number;
};

const InterviewStateBtn = ({ type, interviewId }: Props) => {
  const router = useRouter();

  const routerClickHandle = (path: number) => {
    router.push(`/company/${path}`);
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
  background: ${subMainColor};
  color: white;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;

  :hover {
    box-shadow: 0px 2px 9px #cdcdcd;
    transition: all 0.7s;
    background: ${mainColor};
  }
`;

export default InterviewStateBtn;
