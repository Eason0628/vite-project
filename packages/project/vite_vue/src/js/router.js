import { store } from "@/store/index";
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login/Login.vue";
import Layout from "@/views/layout/index.vue";

const routes = [
    {
        path: "/",
        component: Layout,
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




// Export router
export default router;