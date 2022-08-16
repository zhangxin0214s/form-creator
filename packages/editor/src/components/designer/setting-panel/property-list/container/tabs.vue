<template>
    <div class="input-container">
        <el-divider content-position="center">tabs设置</el-divider>
        <tabs-items
            :advanced-prop="advancedProp"
        ></tabs-items>
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
const activeNames = ref(['1', '2', '3'])
const a = ref({name:'input1'})
const getPropCompName = (key) =>{
    console.log(key,"===key===")
    return BASCI_COMPONENTS[BASIC_PROPERTIES[key]]
}
</script>
<style lang="scss" scoped>
</style>