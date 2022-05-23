import styled from "@emotion/styled";
import React, { FC } from "react";

export type DefaultInputType = {
  width: number;
  inputFontSize: number;
  title: string;
  titleFontSize: number;
  value: string;
  onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  margin: string;
};

const DefaultInput: FC<DefaultInputType> = ({
  width,
  inputFontSize,
  title,
  titleFontSize,
  value,
  onChangeFunction,
  margin,
}) => {
  return (
    <InputContainer width={width} margin={margin}>
      <Title fontSize={titleFontSize}>{title}</Title>
      <Input
        placeholder={`${title}을(를) 입력해주세요.`}
        fontSize={inputFontSize}
        value={value}
        onChange={onChangeFunction}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div<{ width: number; margin: string }>`
  width: ${({ width }) => `${width}px`};
  margin: ${({ margin }) => margin};
`;

const Title = styled.span<{
  fontSize: number;
}>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: #5f5f5f;
`;

const Input = styled.input<{
  fontSize: number;
}>`
  width: 100%;
  margin-top: 10px;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  padding-bottom: 5px;
  border-bottom: 1px solid #e3e4e3;
`;

export default DefaultInput;
