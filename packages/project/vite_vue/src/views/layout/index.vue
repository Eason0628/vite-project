<template>
    <a-layout>
        <Header />
        <a-layout>
            <a-layout-sider :style="siderStyle">Sider</a-layout-sider>
            <a-layout-content :style="contentStyle">Content</a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import Header from './Header.vue';
export default defineComponent({
    components: { Header },
    setup() {
        let state = reactive({

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

.ant-layout-has-sider {}

.ant-layout-content {}
</style>