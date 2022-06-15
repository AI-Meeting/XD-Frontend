import styled from "@emotion/styled";
import React, { useState } from "react";
import { useCompanyList } from "../../../queries/Company";
import CompanyItem from "./companyItem/CompanyItem";

const CompanyList = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { data } = useCompanyList(searchValue);

  return (
    <Container>
      <SearchInput placeholder="찾고 싶은 회사를 검색해주세요" />
      <CompanyListContainer>
        {data && data.map((company, i) => <CompanyItem key={i} {...company} />)}
      </CompanyListContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 45px 1fr;
  grid-row-gap: 30px;
`;

const SearchInput = styled.input`
  width: calc(100% - 50px);
  padding: 10px 0px;
  position: relative;
  color: black;
  background-color: #e3e4e3;
  border-radius: 20px;
  background-image: url("/assets/icon/search.svg");
  background-repeat: no-repeat;
  background-position: 15px center;
  padding-left: 50px;

  &::placeholder {
    color: #888888;
  }
`;

const CompanyListContainer = styled.div`
  width: 100%;
  height: 700px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 10px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default CompanyList;
