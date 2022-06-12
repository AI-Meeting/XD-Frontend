import styled from "@emotion/styled";
import React, { FC } from "react";
import DaumPostcode from "react-daum-postcode";

interface Props {
  onCompleteFunction: (data: any) => void;
  setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationInputModal: FC<Props> = ({ onCompleteFunction, setIsClose }) => {
  return (
    <Container>
      <DaumPostcode
        autoClose
        style={{
          width: "800px",
          height: "600px",
          borderRadius: "10px",
          background: "#ffffff",
        }}
        onComplete={onCompleteFunction}
        onClose={() => setIsClose(false)}
      />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(217, 217, 217, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LocationInputModal;
