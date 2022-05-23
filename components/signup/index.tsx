import styled from "@emotion/styled";
import React, { FC } from "react";
import LoginHeader from "../common/header/LoginHeader";

const Signup: FC = () => {
  const inputData = [
    {
      width: 280,
      title: "이름",
      inputFontSize: 12,
      titleFontSize: 16,
      value: loginValue.id,
      onChangeFunction: setId,
      margin: "0px 0px 20px 0px",
    },
  ];

  return (
    <SignupContainer>
      <SignupContent>
        <LoginHeader />
      </SignupContent>
    </SignupContainer>
  );
};

export const SignupContainer = styled.div`
  width: 400px;
  height: 715px;
  border: 1px solid #e3e4e3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignupContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export default Signup;
