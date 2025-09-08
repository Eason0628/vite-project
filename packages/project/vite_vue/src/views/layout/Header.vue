<template>
    <a-layout-header>
        <div class="logo">
            <img class="titlePic" :src="imgSrc" />
            <h1>{{ title }}</h1>
        </div>
    </a-layout-header>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
    name: 'Header',
    setup() {
        let state = reactive({
            imgSrc: "/images/Logo.png",
            title: "仿真数据管理平台",
        });
        return {
            ...toRefs(state),
        };
    }
});
</script>
</script>

<style scoped>
.ant-layout-header {
    background-image: linear-gradient(to right, #26c0eb, var(--primary-color));
    padding: 0 0 0 24px;
    display: flex;
    color: #fff;
    justify-content: space-between;
    height: 70px;
    line-height: 70px;

    h1 {
        margin: 0 0 0 4px;
        font-weight: 500;
        font-size: 22px;
        line-height: 70px;
        max-height: 70px;
        animation: fade-in;
        animation-duration: var(--animation-duration-slow);
        white-space: nowrap;
        color: #fff;
    }

    &>div {
        display: flex;

        &>div {
            margin-left: 16px;
            cursor: pointer;
        }
    }

    .logo img {
        width: 150px;
        height: 68px;
    }

    .anticon {
        font-size: 18px;
        transition: all 0.3s;
        margin: 2px 0 0 4px;
        vertical-align: sub;

        &:hover {
            transform: scale(1.2);
        }
    }
}
</style>