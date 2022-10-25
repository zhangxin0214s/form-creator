<template>
    <div class="input-container">
        <el-collapse v-model="activeNames" class="input-collapse">
            <el-collapse-item name="1" title="基础属性">
              <div class="title">卡片名称:</div>
              <el-input style="display:inline-block;width: 100px;margin-left:40px;margin-bottom:10px;" v-model="selectedWidget.title"/>
              <div v-for="(item,key,index) in basicProp" :key="index">
                <component
                    :is="componentMap[getPropCompName(key)]"
                    :basic-prop="basicProp"
                    :advanced-prop="advancedProp"
                    :value = "item"
                    :key1 = "key"
                ></component>
              </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { BASCI_COMPONENTS, BASIC_PROPERTIES} from '../propertyRegister'
import * as basicComponents from '../components/index';

defineProps([
    'selectedWidget',
    'basicProp',
    'advancedProp'
])

const componentMap = {
  ...basicComponents
}
const activeNames = ref(['1'])
const getPropCompName = (key) =>{
    return BASCI_COMPONENTS[BASIC_PROPERTIES[key]]
}
</script>
<style lang="scss" scoped>
.title{
    display: inline-block;
    margin-right:10px;
    vertical-align: middle;
}
</style>
