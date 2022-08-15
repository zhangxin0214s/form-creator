<template>
  <div class="input-container">
    <el-collapse v-model="activeNames" class="input-collapse">
      <el-collapse-item name="1" title="基础属性">
        <div v-for="(item,key,index) in basicProp" :key="index">
          <component
              :is="componentMap[getPropCompName(key)]"
              :basic-prop="basicProp"
              :advanced-prop="advancedProp"
              :value="item"
              :key1="key"
          />
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue"
import { BASCI_COMPONENTS, BASIC_PROPERTIES } from '../propertyRegister'
import * as basicComponents from '../components/index';

defineProps([
  'selectedWidget',
  'basicProp',
  'advancedProp'
])
const componentMap = {
  ...basicComponents
}
console.log(componentMap)
const activeNames = ref(['1', '2', '3'])
const getPropCompName = (key) => {
  return BASCI_COMPONENTS[BASIC_PROPERTIES[key]]
}
</script>

<style scoped>

</style>
