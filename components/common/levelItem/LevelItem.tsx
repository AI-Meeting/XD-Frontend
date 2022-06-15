import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";
import { blueColor, mainColor } from "../../../styles/color";

type Props = {
  level: number;
  width: number;
  fontSize: number;
  levelFontSize: number;
  barHeight: number;
};

const LevelItem: FC<Props> = ({
  level,
  width,
  fontSize,
  levelFontSize,
  barHeight,
}) => {
  return (
    <LevelWrapper width={width}>
      <div className="level_num">
        <img src="./assets/icon/starIcon.svg" alt="난이도 표시" />
        <span style={{ fontSize: levelFontSize }}>{level}</span>
      </div>
      <LevelText fontSize={fontSize}>
        <span>쉬움</span>
        <span>보통</span>
        <span>어려움</span>
      </LevelText>
      <LevelBar size={level} height={barHeight}>
        <div className="level_bar"></div>
      </LevelBar>
    </LevelWrapper>
  );
};

const LevelWrapper = styled.div<{ width: number }>`
  color: ${blueColor};
  width: ${({ width }) => `${width}px`};
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .level_num {
    display: flex;
    align-items: center;
    gap: 10px;

    & img {
      width: 20px;
    }
  }
`;

const LevelText = styled.div<{
  fontSize: number;
}>`
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  & span {
    font-size: ${({ fontSize }) => `${fontSize}px`};
  }
`;

const LevelBar = styled.div<{ size: number; height: number }>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
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
