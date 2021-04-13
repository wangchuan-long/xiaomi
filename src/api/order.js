import { del, get, post } from "../utils/request";

// 提交订单
export const reqAddOrder = (data) => post("/api/v1/orders", data);

// 获取订单列表
export const reqOrderlist = (params) => get("/api/v1/orders", params);

// 获取订单详情
export const reqOrderdetail = (id) => get("/api/v1/orders/" + id);

// 删除单个订单
export const reqDelOrder = (data) => del("/api/v1/shop_carts/delmany", data);

// 删除多个订单
export const reqDelOrders = (data) => post("/api/v1/shop_carts/delmany", data);
