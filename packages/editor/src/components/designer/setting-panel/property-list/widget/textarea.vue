<template>
  <div class="textarea-container">
    <el-collapse
        v-model="activeNames"
        class="textarea-collapse"
    >
      <el-collapse-item
          name="1"
          title="基础属性"
      >
        <div
            v-for="(item,key,index) in basicProp"
            :key="index"
        >
          <component
              :is="componentMap[getPropCompName(key)]"
              :basic-prop="basicProp"
              :value="item"
              :key1="key"
          ></component>
        </div>
      </el-collapse-item>

      <el-collapse-item
          name="2"
          title="高级属性"
      >
        <!-- 联动对象设置 -->
        <div
            v-for="(item,key,index) in advancedProp"
            :key="index"
        >
          <component
              :is="componentMap[getAdvancedCompName(key)]"
              :basic-prop="basicProp"
              :advanced-prop="advancedProp"
              :selected-widget="selectedWidget"
              :value="item"
              :key1="key"
          />
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { BASCI_COMPONENTS, BASIC_PROPERTIES, ADVANCED_PROPERTIES } from '../propertyRegister';
import * as basicComponents from '../components/index';

const props = defineProps(['selectedWidget', 'basicProp', 'advancedProp']);
const componentMap = {
  ...basicComponents,
};

const activeNames = ref(['1', '2', '3']);

const getPropCompName = (key) => {
  return BASCI_COMPONENTS[BASIC_PROPERTIES[key]];
};
const getAdvancedCompName = (key) => {
  return BASCI_COMPONENTS[ADVANCED_PROPERTIES[key]]
}
</script>
<style lang="scss" scoped>
</style>
