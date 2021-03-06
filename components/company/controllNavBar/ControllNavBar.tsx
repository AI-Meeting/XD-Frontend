import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FC } from "react";
import { CompanyType } from "../../../@types/CompanyType";
import { mainColor } from "../../../styles/color";

type Props = {
  companyData: CompanyType;
};

const ControllNavBar: FC<Props> = ({ companyData }) => {
  const router = useRouter();
  const questionId = companyData?.question[0]?.id;

  return (
    <NavBarWrap>
      <div className="btn_box">
        <button
          id="start_btn"
          onClick={() =>
            router.push(
              `/company/process/${companyData.id}?questionId=${questionId}`
            )
          }
        >
          모의 면접 진행
        </button>
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
      cursor: pointer;
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
