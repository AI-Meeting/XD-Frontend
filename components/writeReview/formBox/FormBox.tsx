import styled from "@emotion/styled";
import React, { FC, useState } from "react";
import { CompanyReviewType } from "../../../@types/CompanyReviewType";
import DefaultInput from "../../common/input/default";
import LocationInputModal from "../../common/modal/LocationInputModal";

const FormBox: FC = () => {
  const [companyReviewValue, setCompanyReviewValue] =
    useState<CompanyReviewType>({
      name: "",
      location: "",
      field: "",
      job: "",
      level: 0,
      description: "",
      question: [],
    });
  const [isLocation, setIsLocation] = useState<boolean>(false);

  const setCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyReviewValue({
      ...companyReviewValue,
      name: e.target.value,
    });
  };

  const setCompanyLocation = (data) => {
    const address = data.address;
    setCompanyReviewValue({
      ...companyReviewValue,
      location: address,
    });
  };

  return (
    <Container>
      {isLocation && (
        <LocationInputModal
          onCompleteFunction={setCompanyLocation}
          setIsClose={setIsLocation}
        />
      )}
      <DefaultInput
        width={280}
        inputFontSize={14}
        title="회사명"
        titleFontSize={16}
        value={companyReviewValue.name}
        onChangeFunction={setCompanyName}
        margin="0"
      />
      <LocationContainer>
        <span>회사위치</span>
        <LocationInput onClick={() => setIsLocation(true)}>
          {!companyReviewValue.location
            ? "ex) 대전광역시 가정북로 76"
            : companyReviewValue.location}
        </LocationInput>
      </LocationContainer>
      
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const LocationContainer = styled.div`
  width: 100%;
  margin-top: 30px;

  & p {
    font-size: 16px;
    color: #5f5f5f;
  }
`;

const LocationInput = styled.div`
  width: 100%;
  margin-top: 10px;
  padding-bottom: 5px;
  font-size: 14px;
  color: #6f828c;
  background-image: url("/assets/icon/searchIcon.svg");
  background-repeat: no-repeat;
  border-bottom: 1px solid #e3e4e3;
  background-position: 98% center;
  cursor: pointer;
`;

export default FormBox;
