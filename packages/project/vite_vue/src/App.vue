<template>
    <a-config-provider>
        <router-view></router-view>
    </a-config-provider>
</template>
<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const theme = ref({});

</script>

<style scoped></style>
