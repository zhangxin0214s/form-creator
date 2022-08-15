<template>
    <div class="input-container">
        <el-collapse v-model="activeNames" class="input-collapse">
            <el-collapse-item name="1" title="基础属性">
                <div v-for="(item,key,index) in basicProp" :key="index">
                    <component  
                        :is="componentMap[getPropCompName(key)]"
                        :basic-prop="basicProp"
                        :value = "item"
                        :key1 = "key"
                    ></component>
                </div>
            </el-collapse-item>

            <el-collapse-item name="2" title="高级属性">

            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { BASCI_COMPONENTS, BASIC_PROPERTIES} from '../propertyRegister'
import * as basicComponents from '../components/index';

const props = defineProps([
    'selectedWidget',
    'basicProp'
])
console.log(props)
const componentMap = {
  ...basicComponents
}

const activeNames = ref(['1', '2', '3'])

const getPropCompName = (key) =>{
    return BASCI_COMPONENTS[BASIC_PROPERTIES[key]]
}
</script>
<style lang="scss" scoped>
</style>