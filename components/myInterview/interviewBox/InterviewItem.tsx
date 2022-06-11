import styled from "@emotion/styled";
import { FC } from "react";
import { blueColor, grayTextColor } from "../../../styles/color";
import LevelItem from "../../common/levelItem/LevelItem";
import InterviewStateBtn from "../interviewBtn/InterviewStateBtn";

const InterviewItem: FC = () => {
  return (
    <ItemBox>
      <CompanyInfo>
        <NameBox>
          <span>토스</span>
          <span>마케팅/IT</span>
        </NameBox>
        <span id="location">서울 강남구 역삼동</span>
        <div id="field">프론트엔드 분야</div>
        <div id="review_content">
          생각보다 어려웠는데 뭐 할만 했던 것 같아요~~~ 개발쪽보다는 기초를 많이
          물어보시더라구요 기초 탄탄하게 쌓고 가시면
        </div>
        <span id="question_cnt">질문 10개</span>
      </CompanyInfo>
      <LevelInfo>
        <LevelItem />
        <InterviewStateBtn type="진행중" interviewId={1} />
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
