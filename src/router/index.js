import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "hash",
    routes: [{
            path: "/",
            redirect: "/home",
        },
        {
            path: "/register",
            name: "Register",
            component: () =>
                import ("../views/register"),
            meta: {
                title: "注册",
                showTab: false,
            },
        },
        {
            path: "/login",
            name: "Login",
            component: () =>
                import ("../views/login"),
            meta: {
                title: "登录",
                showTab: false,
            },
        },
        {
            path: "/home",
            name: "Home",
            component: () =>
                import ("../views/home"),
            meta: {
                title: "首页",
                showTab: true,
            },
            children: [{
                    path: "tuijian",
                    name: "Tuijian",
                    component: () =>
                        import ("../views/home/tuijian"),
                },
                {
                    path: "phone",
                    name: "Phone",
                    component: () =>
                        import ("../views/home/phone"),
                },
                {
                    path: "zhineng",
                    name: "Zhineng",
                    component: () =>
                        import ("../views/home/zhineng"),
                },
                {
                    path: "teleTv",
                    name: "TeleTv",
                    component: () =>
                        import ("../views/home/teleTv"),
                },
                {
                    path: "family_use",
                    name: "Family_use",
                    component: () =>
                        import ("../views/home/family_use"),
                },
                {
                    path: "computer",
                    name: "Computer",
                    component: () =>
                        import ("../views/home/computer"),
                },
            ],
        },
        {
            path: "/category",
            name: "Category",
            component: () =>
                import ("../views/category"),
            meta: {
                title: "分类",
                showTab: true,
            },
        },
        {
            path: "/detail",
            name: "Detail",
            component: () =>
                import ("../views/detail"),
            meta: {
                title: "列表",
                showTab: false,
            },
        },
        {
            path: "/cart",
            name: "Cart",
            component: () =>
                import ("../views/cart"),
            meta: {
                title: "购物车",
                showTab: true,
            },
        },
        {
            path: "/mine",
            name: "Mine",
            component: () =>
                import ("../views/mine"),
            meta: {
                title: "我的",
                showTab: true,
            },
        },

        {
            path: "/search",
            name: "Search",
            component: () =>
                import ("../views/search"),
            meta: {
                title: "搜索",
                showTab: false,
            },
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