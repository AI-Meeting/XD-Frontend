import styled from "@emotion/styled";
import { NextPage } from "next";
import React from "react";
import Login from "../components/login";

const LoginPage: NextPage<{}> = () => {
  return (
    <Container>
      <Login />
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

export default LoginPage;
