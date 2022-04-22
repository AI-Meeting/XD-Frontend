import styled from "@emotion/styled";
import { useState } from "react";
import { grayBorderColor, grayTextColor } from "../../../styles/color";
import ArrowIcon from "../../common/Icon/ArrowIcon";

const ControlItem = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [selectedName, setSelectedName] = useState<string>("나의 면접 후기");

  const openMenuHandle = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  const optionClickHandle = (option: string) => {
    setSelectedName(option);
    openMenuHandle();
  };

  return (
    <ControllItemContainer>
      <span onClick={openMenuHandle}>{selectedName}</span>
      <ArrowIcon openMenu={openMenu} />
      <MoreMenuBox openMenu={openMenu}>
        <span onClick={() => optionClickHandle("등록한 면접 후기")}>
          등록한 면접 후기
        </span>
        <span onClick={() => optionClickHandle("진행한 모의 면접")}>
          진행한 모의 면접
        </span>
      </MoreMenuBox>
    </ControllItemContainer>
  );
};

const ControllItemContainer = styled.div`
  padding-bottom: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid ${grayBorderColor};
  align-items: center;
  display: flex;
  cursor: pointer;

  > span {
    font-size: 20px;
    font-weight: 700;
    margin-right: 15px;
    color: black;
  }
`;

const MoreMenuBox = styled.div<{ openMenu: boolean }>`
  position: absolute;
  top: 453px;
  width: 142px;
  height: 100px;
  display: ${({ openMenu }) => (openMenu ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0px 5px 25px rgba(103, 103, 103, 0.25);
  border-radius: 10px;
  gap: 15px;

  span {
    color: ${grayTextColor};
  }
`;

export default ControlItem;
