import { post } from "../utils/request";

// 注册
export const reqReg = (data) => post("/api/v1/auth/reg", data);

// 登录
export const reqLogin = (data) => post("/api/v1/auth/login", data);
