/* eslint-disable import/no-anonymous-default-export */
import { QuestionAnwerType } from "../../../@types/QuestionType";
import request from "../common";

export default {
  getCompany(companyId: number) {
    return request({
      url: `/company/${companyId}`,
    });
  },
  deleteComapny(companyId: number) {
    return request({
      method: "delete",
      url: `/company/${companyId}`,
    });
  },
  postQuestionAnswer(answer: QuestionAnwerType, questionId: number) {
    return request({
      method: "post",
      url: `/question/answer?${questionId}`,
      data: answer,
    });
  },
  deleteQuestionAnswer(answerId: number) {
    return request({
      method: "delete",
      url: `/question/answer?answerId=${answerId}`,
    });
  },
  patchQuestionAnswer(answer: QuestionAnwerType, answerId: number) {
    return request({
      method: "patch",
      url: `/question/answer?&answerId=${answerId}`,
      data: answer,
    });
  },
};
