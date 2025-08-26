import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: () => import("../views/About.vue"),
    },
];

// Creating router
const router = createRouter({
    history: createWebHistory(),
    routes,
});



// Export router
export default router;