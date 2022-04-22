import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { optionSelectName } from "../../../lib/module/atom/interview";
import { grayBorderColor } from "../../../styles/color";
import ArrowIcon from "../../common/Icon/ArrowIcon";
import ControllOptionText from "./ControllOptionText";

const ControlItem = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [selectedName, setSelectedName] = useRecoilState(optionSelectName);

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
        <ControllOptionText
          optionName="등록한 면접 후기"
          optionClickHandle={optionClickHandle}
        />
        <ControllOptionText
          optionName="진행한 모의 면접"
          optionClickHandle={optionClickHandle}
        />
      </MoreMenuBox>
    </ControllItemContainer>
  );
};

const ControllItemContainer = styled.div`
  position: relative;
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
  top: 30px;
  width: 142px;
  height: 100px;
  display: flex;
  opacity: ${({ openMenu }) => (openMenu ? 1 : 0)};
  transition: all 0.2s;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0px 5px 25px rgba(103, 103, 103, 0.25);
  border-radius: 10px;
  gap: 15px;
`;

export default ControlItem;
