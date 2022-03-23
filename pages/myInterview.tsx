import styled from "@emotion/styled";
import Header from "../components/common/header";
import MyInterview from "../components/myInterview";

const myInterview = () => {
  return (
    <Container>
      <Header />
      <MyInterview />
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default myInterview;
