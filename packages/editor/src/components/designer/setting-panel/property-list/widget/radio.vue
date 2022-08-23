<template>
  <div class="input-container">
    <el-collapse v-model="activeNames" class="input-collapse">

      <!--基础属性-->
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

      <!--高级属性-->
      <el-collapse-item name="2" title="高级属性">
        <el-divider content-position="center">单选框设置</el-divider>
        <radio-basic
            :advanced-prop="advancedProp"
        />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue"
import { BASCI_COMPONENTS, BASIC_PROPERTIES } from '../propertyRegister'
import * as basicComponents from '../components/index';
import RadioBasic from '../components/radioItems.vue'

defineProps([
  'selectedWidget',
  'basicProp',
  'advancedProp'
])
const componentMap = {
  ...basicComponents
}
const activeNames = ref(['1', '2', '3'])
const getPropCompName = (key) => {
  return BASCI_COMPONENTS[BASIC_PROPERTIES[key]]
}
</script>

<style scoped>

</style>
