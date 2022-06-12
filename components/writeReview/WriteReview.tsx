import styled from "@emotion/styled";
import React, { FC } from "react";
import FormBox from "./formBox/FormBox";

const WriteReview: FC = () => {
  return (
    <Container>
      <Title>면접 후기 등록</Title>
      <Description>
        면접 후기 등록을 통해 자신의 면접을 공유 할 수 있어요.
      </Description>
      <FormBox />
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  height: auto;
  max-height: calc(100vh - 120px);
  margin-top: 30px;
  padding: 45px 80px;
  background-color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Description = styled.p`
  width: 100%;
  padding: 10px;
  background-color: #f4f9fd;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
  color: #6f828c;
  margin-top: 10px;
  margin-bottom: 35px;
`;

export default WriteReview;
