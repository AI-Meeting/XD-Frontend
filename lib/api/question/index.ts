/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { QuestionAnwerType } from "../../../@types/QuestionType";
import request, { MAINURL } from "../common";

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
    const formData: any = new FormData();
    const uri = answer.videoUrl;

    console.log(answer.videoUrl);
    const data = {
      uri,
    };

    formData.append("videoUrl", data);
    // formData.append("voiceUrl", answer.voiceUrl);
    formData.append("answer", answer.answer);

    try {
      return axios({
        method: "post",
        url: `http://localhost:3000/question/answer?questionId=${questionId}`,
        headers: {
          // Accept: "*/*",
          // type: "formData",
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
        data: formData,
      });
    } catch (e) {
      console.log(e);
    }
  },
  deleteQuestionAnswer(answerId: number) {
    return request({
      method: "delete",
      url: `/question/answer/${answerId}`,
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
