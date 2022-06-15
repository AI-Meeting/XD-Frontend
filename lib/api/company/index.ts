import { CompanyListType } from "../../../@types/CompanyType";
import instance from "../common";

export const getCompanyList = async (companyName: string) => {
  const data = await instance.get<CompanyListType[]>(
    companyName !== "" ? `/company?name=${companyName}` : "/company"
  );
  return data.data;
};
