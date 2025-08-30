<template>
    <a-config-provider :theme>
        <router-view></router-view>
    </a-config-provider>
</template>
<script setup>
import {onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { theme1Color, themeStyle } from "@/style/theme.js";

const store = useStore();
const theme = ref({});
onMounted(() => {
    handleTheme(localStorage.getItem("THEME_TYPE") || "1");
});

// 处理主题
const handleTheme = (val) => {
        localStorage.setItem("THEME_TYPE", val || 1);
        let colorStr = {};
        debugger;
        switch (String(val)) {
            case "1":
                theme.value = themeStyle(theme1Color);
                colorStr = theme1Color;
                break;
            default:
                theme.value = themeStyle(theme1Color);
                colorStr = theme1Color;
        }
        
        console.log('theme.value',JSON.stringify(theme.value));
        // 给css透露颜色
        let str = "";
        Object.keys(colorStr).forEach((val) => {
            str += "--" + val + ": " + colorStr[val] + ";";
        });
        let html = document.getElementsByTagName("html")[0];
        html.className = "theme" + (val || 1);
        html.style = str;
};

watch(
    () => store.getters["user/theme"],
    (val) => {
        handleTheme(val);
    }
);
</script>

<style scoped></style>
