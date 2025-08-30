export default {
    namespaced: true,
    state: {
        theme: localStorage.getItem("THEME_TYPE") || "1",
    },
    mutations: {
        setTheme(state, val) {
            state.theme = val;
        },
    },
    getters: {
        theme(state) {
            return state.theme;
        },
    },
}
