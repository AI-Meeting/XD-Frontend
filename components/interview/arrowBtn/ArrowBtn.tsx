import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";

type Props = {
  driection: string;
};

const ArrowBtn: FC<Props> = ({ driection }) => {
  return (
    <ArrowBtnWrap>
      <Image
        src={`/assets/icon/${driection}Icon.svg`}
        width={10}
        height={20}
        alt=""
      />
    </ArrowBtnWrap>
  );
};

const ArrowBtnWrap = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(196, 196, 196, 0.29);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ArrowBtn;
