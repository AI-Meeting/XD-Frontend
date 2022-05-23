import { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../../components/common/header/Header";
import ComapnyDetail from "../../components/company/companyDetail/CompanyDetail";
import ControllNavBar from "../../components/company/controllNavBar/ControllNavBar";
import QuestionDetail from "../../components/company/questionDeatil/QuestionDeatil";
import { useCompany } from "../../queries/question";
import { Container } from "../interview";

const CompanyDetailPage: NextPage = () => {
  const router = useRouter();

  const { data: companyData } = useCompany(1);

  return (
    <>
      <Header />
      <Container>
        <ComapnyDetail />
        <QuestionDetail />
        <ControllNavBar />
      </Container>
    </>
  );
};

export default CompanyDetailPage;
