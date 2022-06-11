import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../components/common/header/Header";
import ComapnyDetail from "../../components/company/companyDetail/CompanyDetail";
import ControllNavBar from "../../components/company/controllNavBar/ControllNavBar";
import QuestionDetail from "../../components/company/questionDeatil/QuestionDeatil";
import { useCompany } from "../../queries/Question";
import { Container } from "../interview";

const CompanyDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: companyData } = useCompany(Number(id));

  return (
    <>
      <Header />
      <Container>
        <ComapnyDetail companyData={companyData?.data} />
        <QuestionDetail companyData={companyData?.data} />
        <ControllNavBar />
      </Container>
    </>
  );
};

export default CompanyDetailPage;
