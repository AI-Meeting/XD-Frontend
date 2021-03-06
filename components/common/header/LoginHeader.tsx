import styled from "@emotion/styled";
import Link from "next/link";
import React, { FC } from "react";

const LoginHeader: FC = () => {
  return (
    <>
      <Link href="/" passHref>
        <Logo src={"/assets/icon/logo.svg"} alt="logo" />
      </Link>
      <Description>
        면접을 쉽고 간편하게,
        <br />
        당신만을 위한 XD
      </Description>
    </>
  );
};

const Logo = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 24px;
  margin-top: 20px;
`;

export default LoginHeader;
