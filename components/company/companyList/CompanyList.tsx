import styled from "@emotion/styled";
import React from "react";

const CompanyList = () => {
  return (
    <Container>
      <SearchInput placeholder="찾고 싶은 회사를 검색해주세요" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 0px;
  position: relative;
  color: #888888;
  background-color: #e3e4e3;
  border-radius: 20px;
  background-image: url("../");
`;

export default CompanyList;
