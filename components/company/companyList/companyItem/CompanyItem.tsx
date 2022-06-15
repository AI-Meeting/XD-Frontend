import styled from "@emotion/styled";
import Link from "next/link";
import React, { FC } from "react";
import { CompanyListType } from "../../../../@types/CompanyType";
import LevelItem from "../../../common/levelItem/LevelItem";

const CompanyItem: FC<CompanyListType> = ({
  name,
  description,
  field,
  job,
  id,
  level,
  location,
  questionCnt,
}) => {
  return (
    <Container>
      <header>
        <Title>{name}</Title>
        <CompanyField>{field}</CompanyField>
      </header>
      <CompanyInfo>
        <CompanyInfoDetail>
          <Location>{location}</Location>
          <Job>{job}</Job>
        </CompanyInfoDetail>
        <span>
          <LevelItem
            level={level}
            width={180}
            fontSize={8}
            levelFontSize={16}
            barHeight={5}
          />
        </span>
      </CompanyInfo>
      <Description>{description}</Description>
      <Footer>
        <QuestionCnt>질문 {questionCnt}개</QuestionCnt>
        <Link href={`/company/${id}`} passHref>
          <MoveInterViewButton>모의 면접 보러가기</MoveInterViewButton>
        </Link>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(126, 126, 126, 0.15);
  box-sizing: border-box;
  margin-top: 30px;
  border: 1px solid #e3e4e35e;
  padding: 25px;

  &:hover {
    box-shadow: 0px 2px 8px rgba(126, 126, 126, 0.25);
  }

  &:first-child {
    margin-top: 0;
  }
`;

const Title = styled.p`
  display: inline;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

const CompanyField = styled.p`
  display: inline;
  font-size: 12px;
  color: #afafaf;
  margin-left: 5px;
`;

const Location = styled.p`
  color: #6f828c;
  font-size: 12px;
`;

const Job = styled.div`
  font-size: 14px;
  color: #51626b;
  margin-top: 4px;
`;

const CompanyInfo = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CompanyInfoDetail = styled.span`
  margin-top: 7px;
`;

const Description = styled.div`
  width: 100%;
  margin: 15px 0px;
  font-size: 12px;
  color: #6f828c;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const QuestionCnt = styled.p`
  display: inline;
  font-size: 12px;
  color: #6f828c;
`;

const MoveInterViewButton = styled.button`
  font-size: 12px;
  color: white;
  padding: 6px 25px;
  background-color: #514ef6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default CompanyItem;
