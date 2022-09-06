<template>
  <el-form
      label-position="left"
      label-width="100px"
      :model="basicProp"
      style="max-width: 360px"
  >
    <el-form-item
        v-if="basicProp[key1]?.label"
        :label="`${basicProp[key1]?.label}:`"
    >
      <el-select
          placeholder="请选择"
          v-model="basicProp[key1].value"
          class="m-2"
          @change="setRuleFormKeyType"
      >
        <el-option
            v-for="item in basicProp[key1].options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>
<script setup>
import { defineProps } from 'vue';
import { widgetStore } from '@/store/index';
import { storeToRefs } from 'pinia';
const _widgetStore = widgetStore();
const { selectedWidget } = storeToRefs(_widgetStore);
const props = defineProps(['basicProp', 'key1', 'value']);

const setRuleFormKeyType = () =>{
  if(props.key1 === 'ruleFormKeyType'){
    _widgetStore.selectedWidget.ruleFormKeyType = props.basicProp[props.key1].value
  }
}
</script>
<style lang="scss" scoped>
</style>
