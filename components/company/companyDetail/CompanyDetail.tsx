import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";
import { CompanyType } from "../../../@types/CompanyType";
import { blueColor, grayTextColor } from "../../../styles/color";
import LevelItem from "../../common/levelItem/LevelItem";
import CompanyImage from "./CompanyImage";

type Props = {
  companyData: CompanyType;
};

const ComapnyDetail: FC<Props> = ({ companyData }) => {
  return (
    <>
      <CompanyImage />
      <CompanyInfo>
        <InfoWrapper>
          <Image
            className="company_logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACiCAMAAAD84hF6AAAAllBMVEX///8AUP8ATv8ASv8AQv8AS/8ARP8AQP8AR/8APv8AQ/9pjP8AUf8ASP8APP/k7P/D0f8YXv/5+/90lP/Bzv/l7f9hhf/09/+Rpf+bsP9OeP/e5v8XVv+Jo//V3//1+P81aP/N2P+iuP+3x/+xwv8+bv/s8v+rvf8ANv+Yrv9Zfv9IdP8mZP8GWf92mf86av9qif95lv+k9yZAAAAGWUlEQVR4nO2aaXeqvBqGNUIGlKA4okjFodXWof7/P3cgARnVrvfs3Y1r3den1iRgbp8x0GoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUMfoX3+BV2TkT/71V2gSrhP0+6HjPp41/mS8+ztf6AUYe7sOY4bBmLnyxvfnzVin3YFsmv7XnpukrSCE77/COxNPNJoF2RTOXJjtAqacTGuntmNtIVvMR1m0GNuuTZc9yJYwlKSqWuSrcl0zGbIldI060WLqdINsmol1T7XI3qqJQcs2rLmQG2zW621Qdw83XM9mh3X/vTKy2Hiz2Xqz+L+38cvM2F3VIt2MfF44DiK0P5P4z8HpnA1u54LRCCZ2m9ItwniIcx6NDT7yA2+HnrDiAYvx4Uspt5EPVIvyQr4d8E1C0ihIYvjN6Ea+ccsqJvPzyeT9M5dwiEH62b1NeguqxJbXt1/Y759hTGqzQYbIOZ1fnmunsnWLSYXILPZNfbtowHKZjCxLmYj7VR9uKLuayqOA+ZlNvivbhZaX0Uu66KTvoKwz+SUOamCb2Hk2YPZeRLePR4FNw7KYc0+2L55+kNkun+s1M60oN4+ro619kuzjADft6H/YabXyEzfm/pN2uBm45hMXjbcyu03nUgihV5giZq988ZBoT6j0T9JKLmmpdOFqIa1zrMfUi3QjlHdjx18rPclJ5ergwtukI1feS8i25DU6lTC/btMdxxmPlcmZk3cnJnaqBdNC0cEmiunuZpUUNHsnGgyFukbq6YFg/lon509lYEYaOieCTWprl+bxTp8bW7T94qJKudvVIZ+lkb7laevrxEl4pEpp+2axo1sePcXXIfbNvLz6FriB/MTYogheLKjKsr1p7a3Ml9OIKZxUNuI7lZuv1DJ++Gu7+1u4xk+Mrc2KnUJZto3ySbLKz5krB6Re5Nc6XRL+PSpZ03dHjdCj91J1bhTKf2RsbbotrCrLNlQ+avTzcxbK3MzYS09JV9Gx5OC6zRndJk0kXMj5of8SuUBRqSf+k2yq8iP8rXppMmgVuhBiUzlY3pQbZCWjyZmYv8hTnf7zmk3xxEl7N4VyqDRJSGxCxV6AcNZNDGvcK7QPJjuVe9lG0i02PfdlK9YFZdlU6UcuxWtPMtlaH8QqmDVP88N0IuyCpPLcajxT/jMfbctiLP+Rtc1zskWV7UrQnEBmLw1kwdAWPFdy156LNovt/WO2AmVF6mMbrdE2l13H2+tKsvSHorcSr+UG3ieRNDF8Qht/CJIUAE+xl8V1ZdnOasu0YCcjFTY7pWfQwfKkG1TSLg442yHT+cEqpp8G8oN2VCFLLU9PN1e3/zdJQZuvIPRZJq26XFIIW5XHsO/6KMa+/rH9/R3CeANRzdR5oh45lhb6Jf9zdZdg5w6Yulx7XHIMFE6ycu1LqWPpD6ZelgNC3YU1/RlFVOuahr9chE/KEPZRWqiaIsKzk7GkReNfaVyaaFfUp0ru4Sh4Jv1Od2Lx6nBCqbzVHCMVau2m59K5LS7qO38+jHEVY2tN1HzzuHDHXXWBNCWbYtgfj8NzGt9l5ImLiYxH7V2isnZS4kc/m68MPc2drnZSo+ml236QVOXOw4cJ+8phjqeNi4iodjipTz7SK9iGECytNEQsyPs+kZR+b8Ng860fLfIoywyTA2Hj6PWD/sFXPwbhDe+xgswbtg90E7PKSkekhhgFfX1+UfegleqksU5PvjuUMaoNmxixO/tJb0W4wYzEYK1l5XbNZXk3vFl1EXqeeTWxtfN1WTmxsDTVDisXJ3vV9o/tymMMe/dLO/4znEV5A8nev+tmO7nDzTTzzYovkZgyM5uZLMpjiqQ2c07FBzfE2jXcRct4+5oyhOzvuEwgeHoaJNOyY7GTaVAjtrzkI2JwiYbSsY68ZNXIWdLs3TAqXslDNcHJKglHKLl7kvM2O8XvDwp7kjscCc4+jV8qtHrD8hsQ4bVni3jMIN+FcznXm6s3EaNLrbzG91V1rImRcyaTmo9/+/ht1cqp7Dj6MKh/D/N9Ecavt1YH1Huv/cVLaqbY7qJcx22bU7bfrV8szPxL3HC9vF6XHy90Qg0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABehv8BiyhXpnfQhiAAAAAASUVORK5CYII="
            alt="sdf"
            width={120}
            height={120}
          />
          <InfoItem>
            <div className="company_info_box">
              <div className="comapny_name">
                <span>{companyData?.name}</span>
                <span>{companyData?.field}</span>
              </div>
              <span id="location">{companyData?.location}</span>
            </div>
            <LevelItem level={companyData?.level} />
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
      span:nth-child(1) {
        font-weight: 700;
        font-size: 28px;
      }

      span:nth-child(2) {
        margin-left: 15px;
        font-size: 16px;
        color: ${grayTextColor};
      }
    }
  }
`;

export default ComapnyDetail;
