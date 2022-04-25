import { NextPage } from "next";
import Header from "../../components/common/header";
import ComapnyDetail from "../../components/company/companyDetail";
import QuestionDetail from "../../components/company/questionDeatil";
import { Container } from "../interview";

const CompanyDetailPage: NextPage<{}> = () => {
  return (
    <Container>
      <Header />
      <ComapnyDetail />
      <QuestionDetail />
    </Container>
  );
};

export default CompanyDetailPage;
