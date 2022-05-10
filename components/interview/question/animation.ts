import { keyframes } from "@emotion/react";

export const backgroundAnimation = keyframes`
0%{background-position:0% 50%} 
50%{background-position:100% 50%}
100%{background-position:0% 50%}
`;

export const circle1Animation = keyframes`
  from {
    transform : translate(0px, 0px);
  }

  30% {
    transform : translate(50px, 50px);
  }

  60%{
    transform : translate(20px, 60px)
  }

  to {
    transform : translateX(0px, 0px);
  }
`;

export const circle2Animation = keyframes`
  from {
    transform : translate(0px, 0px);
  }

  30% {
    transform : translate(-50px, 30px);
  }

  60%{
    transform : translate(-30px, -20px)
  }

  to {
    transform : translateX(0px, 0px);
  }
`;

export const circle3Animation = keyframes`
  from {
    transform : translate(0px, 0px);
  }

  30% {
    transform : translate(50px, -20px);
  }

  60%{
    transform : translate(50px, 20px)
  }

  to {
    transform : translateX(0px, 0px);
  }
`;

export const circle4Animation = keyframes`
  from {
    transform : translate(0px, 0px);
  }

  30% {
    transform : translate(-20px, -10px);
  }

  60%{
    transform : translate(-30px, 30px)
  }

  to {
    transform : translateX(0px, 0px);
  }
`;
