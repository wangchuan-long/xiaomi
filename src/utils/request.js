import axios from "axios";
import { serverURL } from "./common";
import { getToken } from "./utils";
import { Notify } from "vant";

const instance = axios.create({
  baseURL: serverURL,
  timeout: 5000,
});

// 请求拦截
instance.interceptors.request.use(
  function(config) {
    if (getToken()) {
      config.headers.authorization = "Bearer " + getToken();
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
// 响应拦截
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error && error.message.indexOf("401") > -1) {
      Notify({ type: "danger", message: "你还没有登录" });
      location.href = "/";
    }
    return Promise.reject(error);
  }
);

// get请求
export const get = (url, params) => instance.get(url, { params: params });

// post请求
export const post = (url, data) => instance.post(url, data);
