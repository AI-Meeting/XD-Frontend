/* eslint-disable import/no-anonymous-default-export */
import { QuestionAnwerType } from "../../../@types/QuestionType";
import request from "../common";

export default {
  getCompany(companyId: number) {
    return request({
      url: `/company/${companyId}`,
    });
  },
};
