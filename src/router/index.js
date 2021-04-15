import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/register"),
      meta: {
        title: "注册",
        showTab: false,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/login"),
      meta: {
        title: "登录",
        showTab: false,
      },
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../views/home"),
      meta: {
        title: "首页",
        showTab: true,
      },
      children: [
        {
          path: "tuijian",
          name: "Tuijian",
          component: () => import("../views/home/tuijian"), meta: {
            title: "注册",
            showTab: true,
          },
        }, //重定向
        {
          path: "phone",
          name: "Phone",
          component: () => import("../views/home/phone"), meta: {
            title: "注册",
            showTab: true,
          },
          // redirect:'/home/phone',
        },
        {
          path: "zhineng",
          name: "Zhineng",
          component: () => import("../views/home/zhineng"), meta: {
            title: "注册",
            showTab: true,
          },
        },
        {
          path: "teleTv",
          name: "TeleTv",
          component: () => import("../views/home/teleTv"), meta: {
            title: "注册",
            showTab: true,
          },
        },
        {
          path: "family_use",
          name: "Family_use",
          component: () => import("../views/home/family_use"), meta: {
            title: "注册",
            showTab: true,
          },
        },
        {
          path: "computer",
          name: "Computer",
          component: () => import("../views/home/computer"), meta: {
            title: "注册",
            showTab: true,
          },
        },
      ],
    },
    {
      path: "/category",
      name: "Category",
      component: () => import("../views/category"),
      meta: {
        title: "分类",
        showTab: true,
      },
    },
    {
      path: "/detail",
      name: "Detail",
      component: () => import("../views/detail"),
      meta: {
        title: "列表",
        showTab: false,
      },
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/cart"),
      meta: {
        title: "购物车",
        showTab: true,
      },
    },
    {
      path: "/mine",
      name: "Mine",
      component: () => import("../views/mine"),
      meta: {
        title: "我的",
        showTab: true,
      },
    },
    {
      path: "/password",
      name: "Password",
      component: () => import("../views/password"),
      meta: {
        title: "修改密码",
        showTab: false,
      },
    },
    {
      path: "/set",
      name: "Set",
      component: () => import("../views/set"),
      meta: {
        title: "个人设置",
        showTab: false,
      },
    },
    {
      path: "/search",
      name: "Search",
      component: () => import("../views/search"),
      meta: {
        title: "搜索",
        showTab: false,
      },
    },
    {
      path: "/order",
      name: "Order",
      component: () => import("../views/order"),
      meta: {
        title: "订单",
        showTab: false,
      },
    },
    {
      path: "/allorder",
      name: "allOrder",
      component: () => import("../views/allOrder"),
      meta: {
        title: "全部订单",
        showTab: true,
      },
    },
    {
      path: "/address",
      name: "Address",
      component: () => import("../views/address"),
      meta: {
        title: "地址",
        showTab: false,
      },
      redirect: "/address/list",
      children: [
        {
          path: "list",
          name: "List",
          component: () => import("../views/address/list"),
          meta: {
            title: "收货地址",
          },
        },
        {
          path: "edit",
          name: "Edit",
          component: () => import("../views/address/edit"),
          meta: {
            title: "修改地址",
          },
        },
        {
          path: "add",
          name: "Add",
          component: () => import("../views/address/add"),
          meta: {
            title: "添加地址",
          },
        },
      ],
    },
  ],
  linkActiveClass: "lac",
  linkExactActiveClass: "leac",
});

//解决编程式路由往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch((err) => err);
};

export default router;
