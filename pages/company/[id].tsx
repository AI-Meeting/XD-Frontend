import { NextPage } from "next";
import Header from "../../components/common/header/Header";
import ComapnyDetail from "../../components/company/companyDetail/CompanyDetail";
import ControllNavBar from "../../components/company/controllNavBar/ControllNavBar";
import QuestionDetail from "../../components/company/questionDeatil/QuestionDeatil";
import { Container } from "../interview";

const CompanyDetailPage: NextPage = () => {
  return (
    <Container>
      <Header />
      <ComapnyDetail />
      <QuestionDetail />
      <ControllNavBar />
    </Container>
  );
};

export default CompanyDetailPage;
