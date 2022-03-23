import styled from "@emotion/styled";

type Props = {
  openMenu: boolean;
};

const ArrowIcon = ({ openMenu }: Props) => {
  return (
    <ArrowIconBox openMenu={openMenu}>
      <svg
        width="13"
        height="8"
        viewBox="0 0 13 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L6.53846 7L12 1" stroke="#AAAAAA" />
      </svg>
    </ArrowIconBox>
  );
};

const ArrowIconBox = styled.div<{ openMenu: boolean }>`
  transition: all 0.5s;
  transform: ${({ openMenu }) => (openMenu ? "rotate(180deg)" : "rotate(0)")};
`;

export default ArrowIcon;
