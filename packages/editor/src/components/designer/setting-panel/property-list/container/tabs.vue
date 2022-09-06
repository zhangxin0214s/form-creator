<template>
    <div class="input-container">
        <el-collapse v-model="activeNames" class="input-collapse">
            <el-collapse-item name="1" title="基础属性">
              <div v-for="(item,key,index) in basicProp" :key="index">
                <component
                    :is="componentMap[getPropCompName(key)]"
                    :basic-prop="basicProp"
                    :advanced-prop="advancedProp"
                    :value = "item"
                    :key1 = "key"
                ></component>
              </div>

                <div>
                    <div class="title">允许添加标签</div><el-switch v-model="selectedWidget.addable" />
                </div>
                <div>
                    <div class="title">允许删除标签</div><el-switch v-model="selectedWidget.closable" />
                </div>
                <div>
                    <div class="title">标签最多数量</div><el-input style="display:inline-block;width: 100px;" v-model="selectedWidget.maxCount"/>
                </div>
                <el-divider content-position="center">标签设置</el-divider>
                <tabs-items
                    :advanced-prop="advancedProp"
                ></tabs-items>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script setup>
import { ref,defineProps } from "vue"
import { BASCI_COMPONENTS, BASIC_PROPERTIES} from '../propertyRegister'
import * as basicComponents from '../components/index';
import { tabsItems } from "../components/index.js"

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
    console.log(key,"===key===")
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
