import styled from "@emotion/styled";
import { mainColor } from "../../../styles/color";

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
      <LevelBar size={5}>
        <div className="level_bar"></div>
      </LevelBar>
    </LevelWrapper>
  );
};

const LevelWrapper = styled.div`
  width: 230px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const LevelText = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LevelBar = styled.div<{ size: number }>`
  width: 100%;
  height: 8px;
  background: #ececec;
  border-radius: 5px;

  .level_bar {
    width: calc((${({ size }) => size}0% * 2));
    height: 100%;
    background: ${mainColor};
    border-radius: 5px;
  }
`;

export default LevelItem;
