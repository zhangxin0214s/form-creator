<template>
  <div class="textarea-container">
    <el-collapse
        v-model="activeNames"
        class="textarea-collapse"
    >

      <el-collapse-item
          name="2"
          title="高级属性"
      >
      <div>
        <div style="display:inline-block;">每页数量</div>
        <el-input :formatter="toInt" style="width:100px;margin-left:20px;" class="input" v-model="selectedWidget.options.advanced.pageSize" ></el-input>
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

const activeNames = ref(['2']);

const getPropCompName = (key) => {
  return BASCI_COMPONENTS[BASIC_PROPERTIES[key]];
};
const getAdvancedCompName = (key) => {
  return BASCI_COMPONENTS[ADVANCED_PROPERTIES[key]]
}
const toInt=(value)=>{
  if(value){
    return parseInt(value)
  } else {
    return 1
  }
}
</script>
<style lang="scss" scoped>
</style>
