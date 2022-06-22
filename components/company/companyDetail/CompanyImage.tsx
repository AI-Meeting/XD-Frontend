import Image from "next/image";
import { FC } from "react";

const CompanyImage: FC = () => {
  return (
    <img
      style={{ width: "100%", height: "300px", objectFit: "cover", zIndex: 2 }}
      src="/assets/image/company.jpeg"
      alt="sdf"
      title="sdf"
    />
  );
};

export default CompanyImage;
