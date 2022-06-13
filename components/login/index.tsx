import styled from "@emotion/styled";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { useMutation } from "react-query";
import { MAINURL } from "../../lib/api/common";
import LoginHeader from "../common/header/LoginHeader";
import DefaultInput, { DefaultInputType } from "../common/input/default";

const Login: FC = () => {
  const router = useRouter();
  const [loginValue, setLoginValue] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const { mutate: loginMutation } = useMutation(
    "login",
    () => axios.post(`${MAINURL}/auth/login`, { ...loginValue }),
    {
      onSuccess: (data) => {
        localStorage.setItem("access-token", data.data.token);
        setTimeout(() => {
          router.push("/");
        }, 1000);
      },
    }
  );

  const setId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue({
      ...loginValue,
      email: e.target.value,
    });
  };

  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue({
      ...loginValue,
      password: e.target.value,
    });
  };

  const inputData: DefaultInputType[] = [
    {
      width: 280,
      title: "이메일",
      inputFontSize: 12,
      titleFontSize: 16,
      value: loginValue.email,
      onChangeFunction: setId,
      margin: "0px 0px 20px 0px",
    },
    {
      width: 280,
      title: "비밀번호",
      inputFontSize: 12,
      titleFontSize: 16,
      value: loginValue.password,
      onChangeFunction: setPassword,
      margin: "0px",
    },
  ];

  return (
    <LoginContainer>
      <LoginContent>
        <LoginHeader />
        <LoginInputContainer>
          {inputData.map((v: DefaultInputType, i: number) => (
            <DefaultInput key={i} {...v} />
          ))}
        </LoginInputContainer>
        <LoginButton onClick={() => loginMutation()}>login</LoginButton>
        <SignUpDescription>
          아직 계정이 없으신가요?<Link href="/signup"> 간편 가입하기</Link>
        </SignUpDescription>
      </LoginContent>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 400px;
  height: 580px;
  border: 1px solid #e3e4e3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const LoginInputContainer = styled.div`
  margin-top: 50px;
`;

const LoginButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: #514ef6;
  padding: 13px 122px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 2px 13px rgba(46, 46, 46, 0.25);
  margin-top: 45px;
`;

const SignUpDescription = styled.p`
  font-size: 12px;
  color: #6f828c;
  align-self: center;
  margin-top: 20px;

  & a {
    color: black;
  }
`;

export default Login;
