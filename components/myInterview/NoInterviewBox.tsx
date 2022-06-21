import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { mainColor } from "../../styles/color";

const NoInterviewBox = () => {
  const router = useRouter();

  return (
    <Box>
      <p>아직 면접이 등록되지 않았어요!</p>
      <button onClick={() => router.push("/")}>모의 면접 보러가기</button>
    </Box>
  );
};

const Box = styled.div`
  padding: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: #afafaf;
  }
  button {
    width: 220px;
    height: 45px;
    background: #7593ff;
    border-radius: 30px;
    color: white;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s;
    cursor: pointer;

    :hover {
      background: ${mainColor};
    }
  }
`;

export default NoInterviewBox;
