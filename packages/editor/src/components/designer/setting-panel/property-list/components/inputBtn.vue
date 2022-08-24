<template>
  <el-form
      label-position="left"
      label-width="100px"
      :model="basicProp"
      style="max-width: 360px"
  >
    <el-form-item
        v-if="basicProp[key1]?.label"
        :label="`${basicProp[key1]?.label}:`">
      <el-button :icon="Minus" @click="minusValue"/>
      <el-input
          class="input-btn"
          v-model="basicProp[key1].value"
      />
      <el-button :icon="Plus" @click="plusValue"/>
    </el-form-item>
  </el-form>
</template>
<script setup>
import { Plus, Minus } from '@element-plus/icons-vue'
import { defineProps } from 'vue';
import { storeToRefs } from 'pinia'
import { widgetStore } from '@/store/index';

const _widgetStore = widgetStore();
const {formConfig} = storeToRefs(_widgetStore);
defineProps(['basicProp', 'key1']);

const plusValue = () => {
  const plusNum = formConfig._object.cloneWidget.options.basic.maxlength.value
  formConfig._object.cloneWidget.options.basic.maxlength.value = plusNum + 10
}

const minusValue = () => {
  const minusNum = formConfig._object.cloneWidget.options.basic.maxlength.value
  if (minusNum) {
    formConfig._object.cloneWidget.options.basic.maxlength.value = minusNum - 10
  }
}
</script>
<style lang="scss" scoped>
.el-button {
  width: 40px;
}

.input-btn {
  width: 90px;
}
</style>

