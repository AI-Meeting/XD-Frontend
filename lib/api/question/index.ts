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
      url: `/company/${companyId}`,
    });
  },
  postQuestionAnswer(answer: QuestionAnwerType, questionId: number) {
    return request({
      url: `/question/answer?${questionId}`,
      data: answer,
    });
  },
  deleteQuestionAnswer(answerId: number) {
    return request({
      url: `/question/answer?answerId=${answerId}`,
    });
  },
  patchQuestionAnswer(answer: QuestionAnwerType, answerId: number) {
    return request({
      url: `/question/answer?&answerId=${answerId}`,
      data: answer,
    });
  },
};
