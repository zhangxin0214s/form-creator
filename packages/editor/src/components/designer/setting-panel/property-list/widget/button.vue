<template>
  <div class="input-container">
    <el-collapse v-model="activeNames" class="input-collapse">

      <!--基础属性-->
      <el-collapse-item name="1" title="基础属性">
        <div v-for="(item,key,index) in basicProp" :key="index">
          <component
              :is="componentMap[getPropCompName(BASIC_PROPERTIES,key)]"
              :basic-prop="basicProp"
              :advanced-prop="advancedProp"
              :value="item"
              :key1="key"
          />
        </div>
      </el-collapse-item>

      <!--高级属性-->
      <el-collapse-item name="2" title="高级属性">
        <el-divider content-position="center">按钮设置</el-divider>
        <button-basic
            :advanced-prop="advancedProp"
        />
      </el-collapse-item>

      <!--事件属性-->
      <el-collapse-item name="3" title="事件属性">
        <el-divider content-position="center">事件设置</el-divider>
        <div
            v-for="(item,key,index) in eventsProp"
            :key="index">
          <component
              :is="componentMap[getPropCompName(EVENTS_PROPERTIES,key)]"
              :events-prop="eventsProp"
              :value="item"
              :key1="key"
          ></component>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue"
import { BASCI_COMPONENTS, BASIC_PROPERTIES, EVENTS_PROPERTIES } from '../propertyRegister'
import * as basicComponents from '../components/index';
import ButtonBasic from '../components/buttonItems.vue'

const props = defineProps([
  'selectedWidget',
  'basicProp',
  'advancedProp',
  'eventsProp'
])
const componentMap = {
  ...basicComponents
}
const activeNames = ref(['1', '2', '3'])

const getPropCompName = (properties,key) => {
  return BASCI_COMPONENTS[properties[key]]
}

</script>

<style scoped>

</style>
