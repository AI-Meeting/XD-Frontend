import { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import ArrowIcon from "./ArrowIcon";
import { blueColor, redColor } from "../../../styles/color";

const menuData = [
  { id: "menu0", name: "면접 후기 등록", path: "/interview" },
  { id: "menu1", name: "AI 모의 면접", path: "/interview" },
  { id: "menu2", name: "커뮤니티", path: "/sns" },
];

const Header = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const routerClickHandle = (path: string) => {
    router.push(`${path}`);
  };

  const openMenuHandle = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  const logoutHandle = () => {
    openMenuHandle();

    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
  };

  return (
    <HeaderContainer>
      <Image src="/assets/icon/pinIcon.svg" width={30} height={30} alt="로고" />
      <NavMenu>
        {menuData.map((menu) => (
          <li key={menu.id}>
            <a
              onClick={() => routerClickHandle(menu.path)}
              style={{
                color: menu.path === router.pathname ? `#514EF6` : "",
              }}
            >
              {menu.name}
            </a>
          </li>
        ))}

        <ProfileContainer>
          <div className="profile_box" onClick={openMenuHandle}>
            <div className="profile_circle" />
            <span>sliverbeen</span>
            <ArrowIcon />
          </div>
          <MoreMenuBox onClick={logoutHandle} openMenu={openMenu}>
            <li
              onClick={() => {
                routerClickHandle("myInterview"), openMenuHandle;
              }}
            >
              내 면접
            </li>
            <li onClick={openMenuHandle}>로그아웃</li>
          </MoreMenuBox>
        </ProfileContainer>
      </NavMenu>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  padding: 0 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 7px 14px rgba(214, 214, 214, 0.25);
`;

const NavMenu = styled.nav`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;

  li {
    list-style: none;
    font-size: 14px;
    color: #6f828c;
    display: flex;
    align-items: center;
    gap: 10px;

    > a {
      cursor: pointer;
      font-weight: 500;
      transition: all 0.5s;
    }
  }
`;

const ProfileContainer = styled.div`
  cursor: pointer;
  flex-direction: column;
  display: flex;
  color: ${blueColor};
  font-size: 14px;
  height: 85px;

  .profile_box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .profile_circle {
    width: 25px;
    height: 25px;
    border-radius: 30px;
    background: #8d92f2;
  }
`;

const MoreMenuBox = styled.div<{ openMenu: boolean }>`
  padding: 15px;
  gap: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: ${({ openMenu }) => (openMenu ? 1 : 0)};
  transition: all 0.2s;
  position: relative;
  top: 16px;
  background: #ffffff;
  box-shadow: 0px 5px 25px rgba(103, 103, 103, 0.25);
  border-radius: 10px;

  li:nth-child(2) {
    color: ${redColor};
    font-size: 14px;
  }
`;

export default Header;
