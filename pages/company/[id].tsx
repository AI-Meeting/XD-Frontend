import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Header from "../../components/common/header/Header";
import ComapnyDetail from "../../components/company/companyDetail/CompanyDetail";
import ControllNavBar from "../../components/company/controllNavBar/ControllNavBar";
import VideoModal from "../../components/company/questionDeatil/question/question/VideoModal";
import QuestionDetail from "../../components/company/questionDeatil/QuestionDeatil";
import { videoModalAtom } from "../../lib/module/atom/interview";
import { useCompany } from "../../queries/Question";
import { Container } from "../interview";

const CompanyDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: companyData } = useCompany(Number(id));
  const modalOpen = useRecoilValue(videoModalAtom);

  return (
    <>
      <Header />
      <Container>
        {modalOpen && <VideoModal />}
        <ComapnyDetail companyData={companyData?.data} />
        <QuestionDetail companyData={companyData?.data} />
        <ControllNavBar companyData={companyData?.data} />
      </Container>
    </>
  );
};

export default CompanyDetailPage;
