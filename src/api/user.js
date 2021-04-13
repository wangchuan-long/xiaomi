import { get, post } from "../utils/request";

// 用户注册
export const reqReg = (data) => post("/api/v1/auth/reg", data);

// 用户登录
export const reqLogin = (data) => post("/api/v1/auth/login", data);

// 获取用户信息
export const reqInfo = () => get("/api/v1/users/info");

// 修改用户密码
export const reqChangePwd = (data) => post("/api/v1/users/change_pwd", data);

// 修改用户信息
export const reqChangeInfo = (data) => post("/api/v1/users/change_info", data);
