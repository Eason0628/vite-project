<template>
  <div>
    <a-space>
      <a-input />
      <a-button type="primary">Button</a-button>
    </a-space>
    <a-divider />

    <a-form :form="form" :model="data" @values-change="onValuesChange" name="theme" :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }">
      <a-form-item label="Primary Color" name="colorPrimary">
        <a-color-picker v-model:value="data.colorPrimary" />
      </a-form-item>

      <a-form-item label="Border Radius" name="borderRadius">
        <a-input-number v-model:value="data.borderRadius" />
      </a-form-item>

      <a-form-item label="Button">
        <a-form-item label="algorithm" :name="['Button', 'algorithm']" value-prop-name="checked">
          <a-switch v-model:checked="data.Button.algorithm" />
        </a-form-item>

        <a-form-item label="Primary Color" :name="['Button', 'colorPrimary']">
          <a-color-picker v-model:value="data.Button.colorPrimary" />
        </a-form-item>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const defaultData = {
  borderRadius: 6,
  colorPrimary: '#1677ff',
  Button: {
    colorPrimary: '#00B96B',
    algorithm: false
  }
};

const data = reactive({ ...defaultData });
const form = ref(null);

const onValuesChange = (_, allValues) => {
  Object.assign(data, allValues);
};
</script>

<style>
</style>
