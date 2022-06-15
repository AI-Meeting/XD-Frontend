import { useQuery } from "react-query";
import queryKeys from "../contexts/QueryKey";
import { getCompanyList } from "../lib/api/company";

export const useCompanyList = (companyName: string) => {
  return useQuery([queryKeys.companyList, companyName], () =>
    getCompanyList(companyName)
  );
};
