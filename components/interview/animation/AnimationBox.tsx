import styled from "@emotion/styled";
import { FC } from "react";
import {
  circle1Animation,
  circle2Animation,
  circle3Animation,
  circle4Animation,
} from "./animation";

const AnimationBox: FC = () => {
  return (
    <AnimationContaienr>
      <div className="circle_box" id="circle1" />
      <div className="circle_box" id="circle2" />
      <div className="circle_box" id="circle3" />
      <div className="circle_box" id="circle4" />
    </AnimationContaienr>
  );
};

const AnimationContaienr = styled.article`
  margin: 50px 0 120px 0;
  position: relative;
  display: flex;
  justify-content: center;

  .circle_box {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    top: 0;
    position: relative;
  }

  #circle1 {
    background: rgba(153, 255, 249, 0.29);
    right: -114px;
    top: -25px;
    z-index: 1;
    animation: ${circle1Animation} 7s infinite;
  }
  #circle2 {
    background: rgba(55, 52, 210, 0.47);
    top: 14px;
    right: -85px;
    animation: ${circle2Animation} 7s infinite;
  }
  #circle3 {
    background: rgba(81, 78, 246, 0.29);
    right: 51px;
    top: 25px;
    animation: ${circle3Animation} 7s infinite;
  }
  #circle4 {
    background: rgba(114, 84, 197, 0.38);
    right: 108px;
    animation: ${circle4Animation} 7s infinite;
  }
`;

export default AnimationBox;
