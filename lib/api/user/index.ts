/* eslint-disable import/no-anonymous-default-export */
import request from "../common";

export default {
  getUser() {
    return request({
      url: "/user",
    });
  },

  getMyInterview() {
    return request({
      url: "/user/interview",
    });
  },

  getMyInterviewReview() {
    return request({
      url: "/use/interview/review",
    });
  },
};
