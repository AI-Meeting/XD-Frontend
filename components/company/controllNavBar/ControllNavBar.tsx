import styled from "@emotion/styled";
import { FC } from "react";
import { mainColor } from "../../../styles/color";

const ControllNavBar: FC = () => {
  return (
    <NavBarWrap>
      <div className="btn_box">
        <button id="start_btn">모의 면접 진행</button>
        <button id="end_btn">작성 완료</button>
      </div>
    </NavBarWrap>
  );
};

const NavBarWrap = styled.section`
  width: 100%;
  height: 100px;
  background: white;
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  box-shadow: 4px 0 12px #eeeeee;

  .btn_box {
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: end;
    gap: 30px;

    button {
      padding: 15px 30px;
      border: 1px solid ${mainColor};
      box-sizing: border-box;
      border-radius: 30px;
      font-weight: 500;
      font-size: 16px;
    }

    #start_btn {
      background: white;
      color: ${mainColor};
    }

    #end_btn {
      background: ${mainColor};
      color: white;
    }
  }
`;

export default ControllNavBar;
