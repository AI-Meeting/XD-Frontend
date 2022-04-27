import styled from "@emotion/styled";
import { NextPage } from "next";
import Header from "../components/common/header";
import ControllNavBar from "../components/company/controllNavBar";
import MyInterview from "../components/myInterview";

const InterviewPage: NextPage<{}> = () => {
  return (
    <Container>
      <Header />
      <MyInterview />
    </Container>
  );
};

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export default InterviewPage;
