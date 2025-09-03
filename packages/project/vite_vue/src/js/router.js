import {createRouter, createWebHistory} from "vue-router";
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



// Export router
export default router;