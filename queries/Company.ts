import axios from "axios";
import { useMutation } from "react-query";
import { CompanyReviewType } from "../@types/CompanyReviewType";
import instance, { MAINURL } from "../lib/api/common";
import queryKeys from "../contexts/QueryKey";
import { getCompanyList, getCompanyListMap } from "../lib/api/company";
import { useQuery } from "react-query";

export const useWriteReviewMutate = () => {
  return useMutation(
    "writeReview",
    async (companyReview: CompanyReviewType) => {
      return await instance.post(`${MAINURL}/company`, companyReview);
    }
  );
};

export const useCompanyList = (companyName: string) => {
  return useQuery([queryKeys.companyList, companyName], () =>
    getCompanyList(companyName)
  );
};

export const useCompanyListMap = () => {
  return useQuery([queryKeys.companyListMap], () => getCompanyListMap());
};
