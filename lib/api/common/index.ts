import axios, { AxiosError } from "axios";

export const MAINURL = process.env.NEXT_PUBLIC_API_URL;
export const token = `${localStorage.getItem("access_token")}`;

const instance = axios.create({
  baseURL: MAINURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization =
      "Bearer " + localStorage.getItem("access_token");

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error: AxiosError) {
    const status = error.response?.status;

    if (status === 400) {
      window.location.href = "/";
    } else if (status === 401) {
      localStorage.removeItem("access_token");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else if (status === 403) {
      alert("잘못된 접근 입니다.");
      window.location.href = "/";
    } else if (status === 407) {
    } else if (status === 429) {
    }

    return Promise.reject(error);
  }
);

export default instance;
