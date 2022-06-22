import styled from "@emotion/styled";
import Image from "next/image";
import { FC, useState } from "react";
import { CompanyType } from "../../../@types/CompanyType";
import { blueColor, grayTextColor } from "../../../styles/color";
import LevelItem from "../../common/levelItem/LevelItem";
import CompanyImage from "./CompanyImage";

type Props = {
  companyData: CompanyType;
};

const ComapnyDetail: FC<Props> = ({ companyData }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <CompanyImage />
      <CompanyInfo>
        <InfoWrapper>
          <Image
            className="company_logo"
            src={`${companyData?.company_logo}`}
            alt="sdf"
            width={120}
            height={120}
            unoptimized={true}
          />
          <InfoItem>
            <div className="company_info_box">
              <div className="comapny_name">
                <span>{companyData?.name}</span>
                <span>{companyData?.field}</span>
              </div>
              <span id="location">{companyData?.location}</span>
            </div>
            <LevelItem
              level={companyData?.level}
              width={250}
              height={80}
              fontSize={14}
              levelFontSize={20}
              barHeight={6}
            />
          </InfoItem>
        </InfoWrapper>
      </CompanyInfo>
    </>
  );
};

const CompanyInfo = styled.section`
  position: relative;
  top: -100px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 0;
  background: white;
`;

const InfoWrapper = styled.div`
  width: 800px;
  margin: 0 auto;

  .company_logo {
    object-fit: cover;
    z-index: 3;
    width: 120px;
    height: 120px;
  }

  > span {
    box-shadow: 0 3px 8px #e8e8e8;
    border: 1px solid #e3e4e3;
    box-sizing: border-box;
    border-radius: 5px;
  }
`;

const InfoItem = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .company_info_box {
    display: flex;
    flex-direction: column;
    gap: 10px;

    #location {
      color: ${blueColor};
    }

    .comapny_name {
      span:nth-of-type(1) {
        font-weight: 700;
        font-size: 28px;
      }

      span:nth-of-type(2) {
        margin-left: 15px;
        font-size: 16px;
        color: ${grayTextColor};
      }
    }
  }
`;

export default ComapnyDetail;
