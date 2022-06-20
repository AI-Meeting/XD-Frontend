import styled from "@emotion/styled";
import { FC } from "react";
import { QuetionType } from "../../../../../@types/CompanyType";
import {
  darkBlueColor,
  grayBorderColor,
  mainColor,
} from "../../../../../styles/color";
import AnswerItem from "../answer/Answer";
import NoAnswerText from "../answer/NoAnswerText";
import ReactPlayer from "react-player/lazy";

type Props = {
  question: QuetionType;
};

const Question: FC<Props> = ({ question }) => {
  console.log(question);

  return (
    <QuestionWrap>
      <span>
        <strong>Q. </strong>
        {question.question}
      </span>
      {question.questionAnswers.length === 0 ? (
        <NoAnswerText />
      ) : (
        <>
          {question?.questionAnswers?.map((answer) => {
            console.log(answer.videoUrl.split("?")[0]);

            return (
              <>
                <ReactPlayer
                  url={`${answer.videoUrl.split("?")[0]}`} // 플레이어 url
                  width="800px" // 플레이어 크기 (가로)
                  height="500px" // 플레이어 크기 (세로)
                  playing={true} // 자동 재생 on
                  muted={true} // 자동 재생 on
                  controls={true} // 플레이어 컨트롤 노출 여부
                  light={false} // 플레이어 모드
                  pip={true} // pip 모드 설
                />
                <AnswerItem key={answer.id} answer={answer} />
              </>
            );
          })}
        </>
      )}
    </QuestionWrap>
  );
};
const QuestionWrap = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  border-bottom: 1px solid ${grayBorderColor};
  strong {
    color: ${mainColor};
  }
  span {
    font-size: 18px;
    color: ${darkBlueColor};
  }
`;

export default Question;
