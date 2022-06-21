import styled from "@emotion/styled";
import { FC } from "react";
import { CompanyListType } from "../../../@types/CompanyType";
import { blueColor, grayTextColor } from "../../../styles/color";
import LevelItem from "../../common/levelItem/LevelItem";
import InterviewStateBtn from "../interviewBtn/InterviewStateBtn";

type Props = {
  data: CompanyListType;
};

const InterviewItem: FC<Props> = ({ data }) => {
  return (
    <ItemBox>
      <CompanyInfo>
        <NameBox>
          <span>{data.name}</span>
          <span>{data.field}</span>
        </NameBox>
        <span id="location">{data.location}</span>
        <div id="field">{data.job}</div>
        <div id="review_content">{data.description}</div>
        <span id="question_cnt">질문 {data.questionCnt}개</span>
      </CompanyInfo>
      <LevelInfo>
        <LevelItem
          level={data.level}
          width={230}
          height={70}
          fontSize={14}
          levelFontSize={16}
          barHeight={5}
        />
        <InterviewStateBtn type="모의 면접 보러가기" interviewId={data.id} />
      </LevelInfo>
    </ItemBox>
  );
};

const ItemBox = styled.div`
  margin: 20px 0;
  padding: 20px;
  width: 100%;
  height: 200px;
  border: 1px solid #e3e4e35e;
  box-sizing: border-box;

  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: 0.3s ease-in;

  :hover {
    box-shadow: 0px 2px 5px rgba(204, 204, 204, 0.25);
  }
`;

const CompanyInfo = styled.div`
  width: 370px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  #location,
  #field,
  #review_content,
  #question_cnt {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 400;
    color: ${blueColor};
  }

  #field {
    font-size: 16px;
    font-weight: 500;
    color: #51626b;
  }

  #review_content {
    margin-top: 15px;
  }

  #question_cnt {
    margin-top: 15px;
  }
`;

const NameBox = styled.div`
  span {
    margin-right: 5px;
  }
  span:nth-of-type(1) {
    font-size: 18px;
    font-weight: 700;
  }

  span:nth-of-type(2) {
    font-size: 14px;
    font-weight: 500;
    color: ${grayTextColor};
  }
`;

const LevelInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 5px;
`;

export default InterviewItem;
