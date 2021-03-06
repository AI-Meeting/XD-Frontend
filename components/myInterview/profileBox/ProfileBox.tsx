import styled from "@emotion/styled";
import { useMyInterview, useUserInfo } from "../../../queries/User";
import { blueColor, grayTextColor } from "../../../styles/color";

const ProfileBox = () => {
  const { data: user } = useUserInfo();

  return (
    <ProfileContainer>
      <div className="wrapper">
        <div id="profile_img" />
        <MyInfoBox>
          <div className="name_box">
            <span>{user?.data.name}</span>
            <span>학생</span>
          </div>
          <span>{user?.data.email}</span>
          <span>{user?.data.school}</span>
        </MyInfoBox>
      </div>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.section`
  margin-top: 60px;
  width: 100%;
  height: 250px;
  background: white;

  #profile_img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(128.57deg, #514ef6 16.67%, #8d92f2 81.48%);
  }

  .wrapper {
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 40px;
    width: 800px;
    height: 100%;
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

    > span:nth-of-type(1) {
      font-weight: 700;
      font-size: 28px;
    }

    > span:nth-of-type(2) {
      position: relative;
      color: ${grayTextColor};
      font-weight: 500;
      top: 3px;
    }
  }
`;

export default ProfileBox;
