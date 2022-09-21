<template>
    <div class="input-container">
        11111111122222333
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
