import styled from "@emotion/styled";
import { Container } from "../../pages/myInterview";
import { blueColor, grayBackgroundColor } from "../../styles/color";
import ControlItem from "./interviewBox/ControlItem";
import InterviewItem from "./interviewBox/InterviewItem";
import ProfileBox from "./profileBox";

const MyInterview = () => {
  return (
    <Container>
      <ProfileBox />
      <InterviewContainer>
        <ContentContainer>
          <ControlItem />
          <div id="ment">내가 남긴 면접 후기를 볼 수 있습니다. </div>
          <ReviewContainer>
            <InterviewItem />
          </ReviewContainer>
        </ContentContainer>
      </InterviewContainer>
    </Container>
  );
};

const InterviewContainer = styled.section`
  padding: 40px 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px - 250px);
  background: ${grayBackgroundColor};
`;

const ContentContainer = styled.div`
  margin: 30px auto;
  padding: 40px;
  box-sizing: border-box;
  width: 800px;
  height: auto;
  min-height: 500px;
  background: white;
  border-radius: 10px;

  #ment {
    margin-top: 20px;
    color: ${blueColor};
  }
`;

const ReviewContainer = styled.div`
  margin: 30px 0;
  width: 100%;
  height: auto;
`;

export default MyInterview;
