import axios from "axios";
import { useMutation } from "react-query";
import { CompanyReviewType } from "../@types/CompanyReviewType";
import instance, { MAINURL } from "../lib/api/common";

export const useWriteReviewMutate = () => {
  return useMutation(
    "writeReview",
    async (companyReview: CompanyReviewType) => {
      return await instance.post(`${MAINURL}/company`, companyReview);
    }
  );
};
