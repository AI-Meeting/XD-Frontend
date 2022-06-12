import styled from "@emotion/styled";
import React, { FC } from "react";
import LevelItem from "../../../common/levelItem/LevelItem";

const CompanyItem: FC = () => {
  return (
    <Container>
      <header>
        <Title>토스</Title>
        <CompanyField>마케팅/IT</CompanyField>
      </header>
      <CompanyInfo>
        <CompanyInfoDetail>
          <Location>서울 강남구 역삼동 </Location>
          <Job>프론트엔드 분야</Job>
        </CompanyInfoDetail>
        <span>
          <LevelItem
            level={3.9}
            width={180}
            fontSize={8}
            levelFontSize={16}
            barHeight={5}
          />
        </span>
      </CompanyInfo>
      <Description>
        생각보다 어려웠는데 뭐 할만 했던 것 같아요~~~ 개발쪽보다는 기초를 많이
        물어보시더라구요 기초 탄탄하게 쌓고 가시면 나쁘지 않을 것 같아요...
      </Description>
      <Footer>
        <QuestionCnt>질문 10개</QuestionCnt>
        <MoveInterViewButton>모의 면접 보러가기</MoveInterViewButton>
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
