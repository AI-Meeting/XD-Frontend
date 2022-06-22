import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { CompanyReviewType } from "../../@types/CompanyReviewType";
import { useWriteReviewMutate } from "../../queries/Company";
import FormBox from "./formBox/FormBox";

const WriteReview: FC = () => {
  const [companyReviewValue, setCompanyReviewValue] =
    useState<CompanyReviewType>({
      name: "",
      location: "",
      field: "",
      job: "",
      level: 0,
      description: "",
      question: [],
    });
  const [isSaveHover, setIsSaveHover] = useState<boolean>(false);
  const { mutate, isSuccess, isError } = useWriteReviewMutate();
  const router = useRouter();

  const submitReview = () => {
    for (let i in companyReviewValue) {
      if (companyReviewValue[i] === "" || companyReviewValue[i] === 0) {
        alert("빈칸없이 입력해주세요.");
        return;
      } else if (i === "question" && companyReviewValue[i].length === 0) {
        alert("면접 질문을 1개 이상 입력해주세요.");
        return;
      }
    }
    mutate(companyReviewValue);
  };

  useEffect(() => {
    if (isSuccess) {
      alert("면접 후기 등록이 완료되었습니다.");
      router.push("/");
    } else if (isError) {
      alert("잠시후 다시 시도해주세요.");
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (!localStorage.getItem("access-token")) {
      alert("로그인 후 이용해주세요.");
      router.push("/login");
    }
  }, []);

  return (
    <>
      <SaveButton
        isHover={isSaveHover}
        onMouseEnter={() => setIsSaveHover(true)}
        onMouseLeave={() => setIsSaveHover(false)}
        onClick={submitReview}
      >
        {isSaveHover ? (
          <>
            <span>면접등록</span>
            <img src="/assets/icon/reviewCheckIcon.svg" alt="submit icon" />
          </>
        ) : (
          <img src="/assets/icon/reviewCheckIcon.svg" alt="submit icon" />
        )}
      </SaveButton>
      <Container>
        <Title>면접 후기 등록</Title>
        <Description>
          면접 후기 등록을 통해 자신의 면접을 공유 할 수 있어요.
        </Description>
        <FormBox
          companyReviewValue={companyReviewValue}
          setCompanyReviewValue={setCompanyReviewValue}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 600px;
  height: auto;
  max-height: calc(100vh - 120px);
  margin-top: 30px;
  padding: 0px 80px;
  background-color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Description = styled.p`
  width: 100%;
  padding: 10px;
  background-color: #f4f9fd;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
  color: #6f828c;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const SaveButton = styled.button<{
  isHover: boolean;
}>`
  width: ${({ isHover }) => (isHover ? "128px" : "50px")};
  height: 50px;
  position: absolute;
  bottom: 50px;
  right: 100px;
  background-color: #514ef6;
  border-radius: ${({ isHover }) => (isHover ? "30px" : "50%")};
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & span {
    color: white;
    font-size: 16px;
    margin-right: 10px;
  }
`;

export default WriteReview;
