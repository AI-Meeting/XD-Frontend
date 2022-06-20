import styled from "@emotion/styled";
import { FC } from "react";
import { CompanyType } from "../../../../../@types/CompanyType";
import { darkBlueColor } from "../../../../../styles/color";

type Props = {
  companyData: CompanyType;
};

const Review: FC<Props> = ({ companyData }) => {
  return (
    <ReviewContainer>
      <h2>{companyData?.userName}님의 한마디</h2>
      <span>{companyData?.description}</span>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.article`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 20px;
  }

  span {
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    color: ${darkBlueColor};
  }
`;

export default Review;
