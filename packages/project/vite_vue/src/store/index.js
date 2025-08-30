import Vuex from "vuex";
import user from "./module/user";
// import tabs from "./module/tabs";
// import menu from "./module/menu";

export const store = new Vuex.Store({
    modules: {
        // tabs,
        // menu,
        user
    },
});
