import styled from "@emotion/styled";
import { NextPage } from "next";
import Header from "../components/common/header/Header";
import MyInterview from "../components/myInterview/MyInterview";
import { grayBackgroundColor } from "../styles/color";

const InterviewPage: NextPage<{}> = () => {
  return (
    <>
      <Header />
      <MyInterview />
    </>
  );
};

export const Container = styled.main`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: ${grayBackgroundColor};
  display: flex;
  flex-direction: column;
`;

export default InterviewPage;
