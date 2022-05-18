import styled from "@emotion/styled";
import Image from "next/image";
import { string } from "prop-types";
import React, { FC, useEffect, useState } from "react";
import DefaultInput from "../common/input/default";

const Login: FC = () => {
  const [loginValue, setLoginValue] = useState<{
    id: string;
    password: string;
  }>({
    id: "",
    password: "",
  });

  useEffect(() => {
    console.log(loginValue);
  }, [loginValue]);

  const setId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue({
      ...loginValue,
      id: e.target.value,
    });
  };

  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue({
      ...loginValue,
      password: e.target.value,
    });
  };

  return (
    <Container>
      <LoginContent>
        <Image src={"/assets/icon/logo.svg"} width={20} height={20} />
        <DefaultInput
          width={280}
          title="아이디"
          inputFontSize={12}
          titleFontSize={16}
          value={loginValue.id}
          onChangeFunction={setId}
          margin="0px 0px 20px 0px"
        />
        <DefaultInput
          width={280}
          title="비밀번호"
          inputFontSize={12}
          titleFontSize={16}
          value={loginValue.password}
          onChangeFunction={setPassword}
          margin="0px"
        />
      </LoginContent>
    </Container>
  );
};

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContent = styled.div`
  width: 400px;
  height: 580px;
  border: 1px solid #e3e4e3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div``;

export default Login;
