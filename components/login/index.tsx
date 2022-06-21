import styled from "@emotion/styled";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { QueryClient, useMutation } from "react-query";
import { MAINURL } from "../../lib/api/common";
import LoginHeader from "../common/header/LoginHeader";
import DefaultInput, { DefaultInputType } from "../common/input/default";
import { toast } from "react-toastify";

const Login: FC = () => {
  const queryClient = new QueryClient();
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
        queryClient.invalidateQueries("userInfo");
        toast.success("로그인에 성공하셨습니다.");

        setTimeout(() => {
          router.push("/");
        }, 100);
      },
      onError: (error: AxiosError) => {
        if (error.response.status === 400) {
          alert("잘못된 인증 정보");
        } else {
          alert("잠시 후 다시 시도해주세요.");
        }
      },
      onError: () => {
        toast.error("아이디 혹은 비밀번호를 확인해주세요.");
      },
    }
  );

  const setId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue({
      ...loginValue,
      email: e.target.value.replace(/\s/g, ""),
    });
  };

  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue({
      ...loginValue,
      password: e.target.value.replace(/\s/g, ""),
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

  const login = () => {
    if (loginValue.email === "" || loginValue.password === "") {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    loginMutation();
  };

  return (
    <LoginContainer>
      <LoginContent>
        <LoginHeader />
        <LoginInputContainer>
          {inputData.map((v: DefaultInputType, i: number) => (
            <DefaultInput key={i} {...v} />
          ))}
        </LoginInputContainer>
        <LoginButton onClick={login}>login</LoginButton>
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
