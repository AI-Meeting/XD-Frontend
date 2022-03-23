import styled from "@emotion/styled";
import { blueColor, grayTextColor, mainColor } from "../../../styles/color";

const ProfileBox = () => {
  return (
    <ProfileContainer>
      <div id="profile_img" />
      <MyInfoBox>
        <div className="name_box">
          <span>Silvebreen</span>
          <span>학생</span>
        </div>
        <span>대덕소프트웨어마이스터고등학교</span>
      </MyInfoBox>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.section`
  width: 800px;
  height: 250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 40px;

  #profile_img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: ${mainColor};
  }
`;

const MyInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > span {
    color: ${blueColor};
    font-weight: 400;
  }

  .name_box {
    display: flex;
    align-items: center;
    gap: 15px;

    > span:nth-child(1) {
      font-weight: 700;
      font-size: 28px;
    }

    > span:nth-child(2) {
      position: relative;
      color: ${grayTextColor};
      font-weight: 500;
      top: 3px;
    }
  }
`;

export default ProfileBox;
