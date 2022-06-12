import styled from "@emotion/styled";
import Header from "../components/common/header/Header";
import CompanyList from "../components/company/companyList/CompanyList";
import NaverMap from "../components/naverMap";

export default function Home() {

  return (
    <CompanyListLayout>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <SideBarContainer>
        <CompanyList />
      </SideBarContainer>
      <MainContainer>
        <NaverMap />
      </MainContainer>
    </CompanyListLayout>
  );
}

const CompanyListLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 460px 1fr;
  grid-template-areas:
    "header header"
    "sideBar main";
  grid-row-gap: 38px;
  grid-column-gap: 50px;
`;

const HeaderContainer = styled.header`
  grid-area: header;
`;

const SideBarContainer = styled.aside`
  grid-area: sideBar;
  margin-left: 50px;
`;

const MainContainer = styled.section`
  grid-area: main;
`;
