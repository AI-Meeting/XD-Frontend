import styled from "@emotion/styled";
import { FC } from "react";
import { blueColor, mainColor } from "../../../styles/color";
import StarIcon from "../../../public/assets/icon/starIcon.svg";

type Props = {
  level: number;
  width: number;
  fontSize: number;
  levelFontSize: number;
  barHeight: number;
  height: number;
};

const LevelItem: FC<Props> = ({
  level,
  width,
  fontSize,
  levelFontSize,
  barHeight,
  height,
}) => {
  return (
    <LevelWrapper width={width} height={height}>
      <div className="level_num">
        <StarIcon />
        <span style={{ fontSize: levelFontSize }}>{level}</span>
      </div>
      <LevelText fontSize={fontSize}>
        <span>쉬움</span>
        <span>보통</span>
        <span>어려움</span>
      </LevelText>
      <LevelBar size={(level / 5) * 100} height={barHeight}>
        <div className="level_bar"></div>
      </LevelBar>
    </LevelWrapper>
  );
};

const LevelWrapper = styled.div<{ width: number; height: number }>`
  color: ${blueColor};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
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
  margin-top: 5px;

  .level_bar {
    width: ${({ size }) => `${size}%`};
    height: 100%;
    background: ${mainColor};
    border-radius: 5px;
  }
`;

export default LevelItem;
