import { del, get, post } from "../utils/request";

// 加入购物车
export const reqAddCart = (data) => post("/api/v1/shop_carts", data);

// 获取购物车列表
export const reqCartlist = () => get("/api/v1/shop_carts");

// 删除单个购物车商品
export const reqDelCart = (id) => del("/api/v1/shop_carts/" + id);

// 删除多个购物车商品
export const reqDelCarts = (data) => post("/api/v1/shop_carts/delmany", data);
