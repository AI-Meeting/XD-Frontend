import styled from "@emotion/styled";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { useMutation } from "react-query";
import { MAINURL } from "../../lib/api/common";
import LoginHeader from "../common/header/LoginHeader";
import DefaultInput, { DefaultInputType } from "../common/input/default";

const Signup: FC = () => {
  const router = useRouter();
  const [signupValue, setSignupValue] = useState<{
    name: string;
    email: string;
    password: string;
    school: string;
  }>({
    name: "",
    email: "",
    password: "",
    school: "",
  });

  const { mutate: signupMutation } = useMutation(
    "signup",
    () => axios.post(`${MAINURL}/auth/signup`, { ...signupValue }),
    {
      onSuccess: () => {
        router.push("/login");
      },
    }
  );

  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupValue({
      ...signupValue,
      name: e.target.value,
    });
  };

  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupValue({
      ...signupValue,
      email: e.target.value,
    });
  };

  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupValue({
      ...signupValue,
      password: e.target.value,
    });
  };

  const setSchool = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupValue({
      ...signupValue,
      school: e.target.value,
    });
  };

  const inputData: DefaultInputType[] = [
    {
      width: 280,
      title: "이름",
      inputFontSize: 12,
      titleFontSize: 16,
      value: signupValue.name,
      onChangeFunction: setName,
      margin: "0px 0px 20px 0px",
    },
    {
      width: 280,
      title: "이메일",
      inputFontSize: 12,
      titleFontSize: 16,
      value: signupValue.email,
      onChangeFunction: setEmail,
      margin: "0px 0px 20px 0px",
    },
    {
      width: 280,
      title: "비밀번호",
      inputFontSize: 12,
      titleFontSize: 16,
      value: signupValue.password,
      onChangeFunction: setPassword,
      margin: "0px 0px 20px 0px",
    },
    {
      width: 280,
      title: "학교",
      inputFontSize: 12,
      titleFontSize: 16,
      value: signupValue.school,
      onChangeFunction: setSchool,
      margin: "0px 0px 20px 0px",
    },
  ];

  return (
    <SignupContainer>
      <SignupContent>
        <LoginHeader />
        <SignupInputContainer>
          {inputData.map((v: DefaultInputType, i: number) => (
            <DefaultInput key={i} {...v} />
          ))}
        </SignupInputContainer>
        <SignupButton onClick={() => signupMutation()}>Sign Up</SignupButton>
        <LoginDescription>
          이미 계정이 없으신가요?<Link href="/login"> 로그인하기</Link>
        </LoginDescription>
      </SignupContent>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  width: 400px;
  height: 715px;
  border: 1px solid #e3e4e3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const SignupInputContainer = styled.div`
  margin-top: 50px;
`;

const SignupButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: #514ef6;
  padding: 13px 122px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 2px 13px rgba(46, 46, 46, 0.25);
  margin-top: 30px;
`;

const LoginDescription = styled.p`
  font-size: 12px;
  color: #6f828c;
  align-self: center;
  margin-top: 20px;

  & a {
    color: black;
  }
`;

export default Signup;
