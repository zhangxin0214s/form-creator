<template>
  <div class="select-container">
    <el-collapse v-model="activeNames" class="input-collapse">
      <el-collapse-item name="1" title="基础属性">
        <div v-for="(item,key,index) in basicProp" :key="index">
          <component
              :is="componentMap[getBasicCompName(key)]"
              :basic-prop="basicProp"
              :advanced-prop="advancedProp"
              :value="item"
              :key1="key"
          >
          </component>
        </div>
      </el-collapse-item>
      <el-collapse-item
          name="2"
          title="高级属性"
          class="selectAdvance"
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
          ></component>
        </div>

        <!-- 高级属性设置 -->
        <el-divider class="title" content-position="center">选项设置</el-divider>
        <add-select-list
            :advanced-prop="advancedProp"
        />
      </el-collapse-item>

      <!--事件属性-->
      <el-collapse-item
          name="3"
          title="事件属性"
      >
        <el-divider content-position="center">事件设置</el-divider>
        <div
            v-for="(item,key,index) in eventsProp"
            :key="index"
        >
          <component
              :is="componentMap[getEventCompName(EVENTS_PROPERTIES,key)]"
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
import { ref } from "vue"
import { BASCI_COMPONENTS, BASIC_PROPERTIES, ADVANCED_PROPERTIES, EVENTS_PROPERTIES } from '../propertyRegister'
import * as components from '../components/index';
import addSelectList from '../components/private/addSelectList.vue';

const props = defineProps(['selectedWidget', 'basicProp', 'advancedProp', 'eventsProp'])
const componentMap = {
  ...components
}

const activeNames = ref(['1', '2', '3'])

const getBasicCompName = (key) => {
  return BASCI_COMPONENTS[BASIC_PROPERTIES[key]]
}

const getAdvancedCompName = (key) => {
  return BASCI_COMPONENTS[ADVANCED_PROPERTIES[key]]
}

const getEventCompName = (properties, key) => {
  return BASCI_COMPONENTS[properties[key]]
}
</script>
<style lang="scss">
.selectAdvance {
  // max-height: 92%;
  // display: flex;
  // flex-direction: column;
  > div:first-child {
    // height: 40px;
  }

  > div:last-child {
    // flex: 1;
    // display: flex;
    // flex-direction: column;
    > div {
      // height: 100%;
      // display: flex;
      // flex-direction: column;
    }
  }
}
</style>
<style lang="scss" scoped>
.select-container {
  height: 100%;
  // overflow: hidden;
  // display: flex;
  // flex-direction: column;
  .input-collapse {
    // flex: 1;
    // overflow: hidden;
    // display: flex;
    // flex-direction: column;
    > div {
      // height: 45%;
      // display: flex;
      // flex-direction: column;
    }

    > div:last-child {
      // height: 55%;
    }
  }

  > div {
    // height: 100%;
  }
}
</style>
