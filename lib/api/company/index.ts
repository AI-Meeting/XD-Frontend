import {
  CompanyListMapType,
  CompanyListType,
} from "../../../@types/CompanyType";
import request from "../common";
import instance from "../common";

export const getCompanyList = async (companyName: string) => {
  const data = await instance.get<CompanyListType[]>(
    companyName !== "" ? `/company?name=${companyName}` : "/company"
  );
  return data.data;
};

export const getCompanyListMap = async () => {
  const data = await instance.get<CompanyListMapType[]>("/company/list");
  return data.data;
};

export const getCompany = (companyId: number) => {
  return request({
    url: `/company/${companyId}`,
  });
};
