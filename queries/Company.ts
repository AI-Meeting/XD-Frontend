import { useQuery } from "react-query";
import queryKeys from "../contexts/QueryKey";
import { getCompanyList, getCompanyListMap } from "../lib/api/company";

export const useCompanyList = (companyName: string) => {
  return useQuery([queryKeys.companyList, companyName], () =>
    getCompanyList(companyName)
  );
};

export const useCompanyListMap = () => {
  return useQuery([queryKeys.companyListMap], () => getCompanyListMap());
};
