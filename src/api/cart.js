import { get, post } from "../utils/request";

// 加入购物车
export const reqAddCart = (data) => post("/api/v1/shop_carts", data);

// 获取购物车数据
export const reqCartlist = () => get("/api/v1/shop_carts");
