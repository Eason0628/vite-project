import { TOKEN_KEY } from "@/js/constant";
export default {
    namespaced: true,
    state: {
        theme: localStorage.getItem("THEME_TYPE") || "1",
        token: localStorage.getItem(TOKEN_KEY) ? localStorage.getItem(TOKEN_KEY) : "",
        userInfo: { "user": "admin", "password": "123456" },
        route: {},
    },
    mutations: {
        setTheme(state, val) {
            state.theme = val;
        },
        setToken(state, token) {
            state.token = token;
            if (token) localStorage.setItem(TOKEN_KEY, token);
            else {
                localStorage.removeItem(TOKEN_KEY);
                location.href = "/login";
            }
        },
        setRoute(state, val) {
            state.route = val;
        },
        setUserInfo(state, val) {
            state.userInfo = val;
        },
    },
    actions: {
        SetMenus({ commit }) {
            debugger;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("SetMenus");

                    const asyncRoutes = [
                        {
                            path: "/test",
                            component: "Test",
                        }
                    ];
                    resolve();
                }, 1000);
            }).catch((error) => {
                reject(error);
            });
        },
    },
    getters: {
        theme(state) {
            return state.theme;
        },
        token(state) {
            return state.token;
        },
        userInfo(state) {
            return state.userInfo;
        },
    },
}
