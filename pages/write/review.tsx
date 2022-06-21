import styled from "@emotion/styled";
import React, { FC } from "react";
import Header from "../../components/common/header/Header";
import WriteReview from "../../components/writeReview/WriteReview";
import { grayBackgroundColor } from "../../styles/color";

const WriteCompanyReviewPage: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <WriteReview />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  position: relative;
  background-color: ${grayBackgroundColor};
  display: flex;
  justify-content: center;
`;

export default WriteCompanyReviewPage;
