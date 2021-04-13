import { get, post } from "../utils/request";

// 添加收货地址
export const reqAddRess = (data) => post("/api/v1/addresses", data);

// 获取收货地址列表
export const reqResslist = (params) => get("/api/v1/addresses", params);

// 获取收货地址详情
export const reqRessDetail = (id) => get("/api/v1/addresses/" + id);

// 修改收货地址
export const reqChangeRess = (id, params) =>
  put("/api/v1/addresses/" + id, params);

// 删除收货地址
export const reqDelRess = (id) => post("/api/v1/addresses/", id);
