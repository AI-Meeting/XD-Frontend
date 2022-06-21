import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { CompanyListType } from "../../@types/CompanyType";
import { optionSelectName } from "../../lib/module/atom/interview";
import { Container } from "../../pages/interview";
import { useMyInterview, useMyInterviewReview } from "../../queries/User";
import { blueColor, grayBackgroundColor, mainColor } from "../../styles/color";
import ControlItem from "./interviewBox/ControlItem";
import InterviewItem from "./interviewBox/InterviewItem";
import NoInterviewBox from "./NoInterviewBox";
import ProfileBox from "./profileBox/ProfileBox";

const MyInterview = () => {
  const selectedName = useRecoilValue(optionSelectName);
  const { data: myInterview } = useMyInterview();
  const { data: myInterviewReview } = useMyInterviewReview();

  const selectNameMentHandle = () => {
    if (selectedName === "등록한 면접 후기") {
      return "내가 남긴 면접 후기를 볼 수 있습니다. ";
    } else {
      return "내가 진행했던 모의 면접을 확인 할 수 있습니다.";
    }
  };

  const selectNameDataHandle = () => {
    if (selectedName === "등록한 면접 후기") {
      return myInterviewReview?.data;
    } else {
      return myInterview?.data;
    }
  };

  return (
    <Container>
      <ProfileBox />
      <InterviewContainer>
        <ContentContainer>
          <ControlItem />
          <ContentMent>{selectNameMentHandle()}</ContentMent>
          <ReviewContainer>
            {myInterviewReview?.data.length === 0 ? (
              <NoInterviewBox />
            ) : (
              selectNameDataHandle()?.map((interview: CompanyListType) => (
                <InterviewItem key={interview.id} data={interview} />
              ))
            )}
          </ReviewContainer>
        </ContentContainer>
      </InterviewContainer>
    </Container>
  );
};

const InterviewContainer = styled.section`
  border-top: 1px solid #e3e4e3;
  padding: 20px 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px - 250px);
  background: ${grayBackgroundColor};
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  padding: 40px;
  box-sizing: border-box;
  width: 800px;
  height: auto;
  min-height: 650px;
  min-height: 500px;
  background: white;
  border-radius: 3px;
  border: 1px solid #f0f0f0;
`;

const ContentMent = styled.div`
  margin-top: 20px;
  color: ${blueColor};
`;

const ReviewContainer = styled.div`
  margin: 30px 0;
  width: 100%;
  height: auto;
`;

export default MyInterview;
