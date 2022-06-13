import styled from "@emotion/styled";
import React, { FC, useState } from "react";
import { CompanyReviewType } from "../../../@types/CompanyReviewType";
import DefaultInput from "../../common/input/default";
import LocationInputModal from "../../common/modal/LocationInputModal";

const JOB_OPTIONS = [
  "프론트엔드",
  "백엔드",
  "안드로이드",
  "iOS",
  "인공지능",
  "게임개발",
  "임베디드",
  "기타",
];

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

  const setCompanyField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyReviewValue({
      ...companyReviewValue,
      field: e.target.value,
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
      <FieldInputContainer>
        <DefaultInput
          width={150}
          inputFontSize={14}
          title="회사 분야"
          titleFontSize={16}
          value={companyReviewValue.field}
          onChangeFunction={setCompanyField}
          margin="0"
          placeHolder="ex) 이커머스"
        />
        <JobSelectContainer>
          <p>면접분야</p>
          <JobSelect>
            {JOB_OPTIONS.map((v, i) => (
              <option value={v} key={i}>
                {v}
              </option>
            ))}
          </JobSelect>
        </JobSelectContainer>
      </FieldInputContainer>
      <LevelContainer>
        <h3>면접 난이도</h3>
      </LevelContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const LocationContainer = styled.div`
  width: 100%;
  margin-top: 30px;

  & span {
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

const FieldInputContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  align-items: center;
`;

const JobSelectContainer = styled.div`
  width: 150px;
  margin-left: 45px;

  & p {
    font-size: 16px;
    color: #5f5f5f;
    margin-bottom: 10px;
  }
`;

const JobSelect = styled.select`
  width: 100%;
  border-bottom: 1px solid #e3e4e3;
  color: #6f828c;
  padding-bottom: 5px;

  & option {
    color: #6f828c;
    font-size: 14px;
  }
`;

const LevelContainer = styled.div`
  width: 100%;
  margin-top: 30px;

  & h3 {
    font-size: 16px;
    color: #5f5f5f;
    margin-bottom: 10px;
    font-weight: normal;
  }
`;

const LevelInputContainer = styled.div``;

export default FormBox;
