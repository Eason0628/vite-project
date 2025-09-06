import { store } from "@/store/index";
import { message } from "ant-design-vue";
import { TOKEN_KEY, THING_CODE } from "@/js/constant";
import axios from "axios";
import router from "@/js/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const DEFAULT_REQUEST_BODY = {
    a1: "APP-UvygAWn-4519950447516193282-2",
    a2: "KEY035UvyhbsvXDuoopaM2b3H4jRRnjnBpt53gOXsdbj3",
    t1: "2025-09-06 09:53:33"
};


const service = axios.create({
    baseURL: "/api",
    timeout: 100000,
});

let loadingNum = 0;

function startLoading() {
    if (loadingNum === 0) NProgress.start();
    loadingNum++;
}

function endLoading() {
    loadingNum--;
    if (loadingNum <= 0) NProgress.done();
}

service.defaults.headers["Content-Type"] = "application/json; charset=utf-8";
service.defaults.headers["intesim_thing_code"] = THING_CODE;

service.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_KEY] = store.getters["user/token"];
        if (
            config.headers["Content-Type"] === "application/json; charset=utf-8" &&
            ['post', 'put', 'patch', 'delete'].includes(config.method?.toLowerCase())
        ) {
            const userData = config.data || {};
            config.data = { ...DEFAULT_REQUEST_BODY, ...userData };
        }
        startLoading();
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        endLoading();
        // if (response.headers[TOKEN_KEY]) {
        //     store.commit("user/setToken", response.headers[TOKEN_KEY]);
        // }
        const TEST_TOKEN_KEY = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTg1NzEyNzEzOSwiY3JlYXRlZCI6MTc1NzEyNzE0MDg5MiwidGhpbmdDb2RlIjoicDYwMV9tZCIsInNpbmdsZVBvaW50IjpmYWxzZX0.aQge_RgNbEL1gYA8goxnWdOlRk57WBf8XM_n8XSeaGlqxuZG8b7jrRey1LBwOK78ZhZ6difIhO__oqmJA22Oxg"
        if (TEST_TOKEN_KEY) {
            store.commit("user/setToken", TEST_TOKEN_KEY);
        }
        return response.data;
    },
    (error) => {
        endLoading();
        if (error.response) {
            if (error.response.status === 401) {
                store.commit("user/setToken", "");
                router.push({
                    path: "/login",
                    query: {
                        redirect: router.currentRoute.value.path !== "/login" ? router.currentRoute.value.path : undefined,
                    },
                });
            } else if (error.response.status === 404) {
                message.error("Not Found!");
            } else message.error(error.response.data.message);
        }
        return Promise.reject(error);
    }
);
export default service;
