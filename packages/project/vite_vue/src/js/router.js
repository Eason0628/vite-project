import { store } from "@/store/index";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/Home.vue";
import Login from "@/views/login/Login.vue";
import { DASHBOARD_URL } from "@/js/constant";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: () => import("@/views/home/About.vue"),
    },
    {
        path: "/login",
        component: Login,
    },
];

// Creating router
const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
    debugger;
    let token = store.getters["user/token"];
    token = "token_testInfo_eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc1Njk4Njc2NiwiY3JlYXRlZCI6MTc1Njk3OTU2NjcxNiwidGhpbmdDb2RlIjoiaW50ZXNpbV9zcGRtIn0.m-cDORfLCELY-noEDFYdWs3eqf06mJlb50XYHR9nAPW_5Tuu04wC7dEtEMRYg7XQiL1RENTvGpwRXE5Y-7fzlQ";
    if (token) {
        if (Object.keys(store.getters["user/userInfo"]).length === 0) {
            store.dispatch("user/SetMenus").then((asyncRoutes) => {
                console.log(asyncRoutes);
            });
        } else {
            if (to.path === "/login") next("/");
            else {
                next();
                store.commit("user/setRoute", to);
            }
        }
    } else {
        if (to.path === "/login") {
            next();
            store.commit("user/setRoute", to);
        }
        else next({ path: "/login", query: { redirect: to.fullPath } });
    }
});

// Export router
export default router;