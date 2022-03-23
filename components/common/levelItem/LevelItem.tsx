import styled from "@emotion/styled";

const LevelItem = () => {
  return (
    <LevelWrapper>
      <div className="level_num">
        <img src="./assets/icon/starIcon.svg" alt="난이도 표시" />
        <span>3.9</span>
      </div>
      <LevelText>
        <span>쉬움</span>
        <span>보통</span>
        <span>어려움</span>
      </LevelText>
      <div className="level_bar"></div>
    </LevelWrapper>
  );
};

const LevelWrapper = styled.div`
  width: 230px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LevelText = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default LevelItem;
