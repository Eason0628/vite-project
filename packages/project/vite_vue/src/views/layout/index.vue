<template>
    <a-layout>
        <a-layout-header>
            <div class="logo">
                <img class="titlePic" :src="imgSrc" />
                <h1>{{ title }}</h1>
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider :style="siderStyle">Sider</a-layout-sider>
            <a-layout-content :style="contentStyle">Content</a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
    setup() {
        let state = reactive({
            imgSrc: "/images/Logo.png",
            title: "仿真数据管理平台",
        });
        // 定义各部分的样式
        const contentStyle = {
            textAlign: 'center',
            minHeight: 120,
            lineHeight: '120px',
            color: 'black',
            backgroundColor: '#fff',
            border: '1px solid #e8e8e8'
        };
        const siderStyle = {
            textAlign: 'center',
            lineHeight: '120px',
            color: 'black',
            backgroundColor: '#fff',
            border: '1px solid #e8e8e8'
        };
        // 返回需要在模板中使用的变量
        return {
            siderStyle,
            contentStyle,
            ...toRefs(state),
        };
    },
});
</script>

<style lang="less" scoped>
.a-layout {
    background-color: #f0f2f5cc;
    height: 100%;
}

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


.ant-layout-has-sider {}

.ant-layout-content {}
</style>