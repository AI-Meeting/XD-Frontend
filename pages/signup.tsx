import styled from "@emotion/styled";
import React from "react";
import Signup from "../components/signup";

const SignupPage = () => {
  return (
    <Container>
      <Signup />
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

export default SignupPage;
