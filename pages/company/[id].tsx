import { NextPage } from "next";
import Header from "../../components/common/header";
import ComapnyDetail from "../../components/company/companyDetail";
import ControllNavBar from "../../components/company/controllNavBar";
import QuestionDetail from "../../components/company/questionDeatil";
import { Container } from "../interview";

const CompanyDetailPage: NextPage<{}> = () => {
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
