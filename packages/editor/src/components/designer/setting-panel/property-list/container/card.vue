<template>
    <div class="input-container">
        <el-collapse v-model="activeNames" class="input-collapse">
            <el-collapse-item name="1" title="基础属性">
              <div>
                <div class="title">卡片名称</div><el-input style="display:inline-block;width: 100px;" v-model="selectedWidget.title"/>
              </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script setup>
import { ref,defineProps } from "vue"
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
</script>
<style lang="scss" scoped>
.title{
    display: inline-block;
    margin-right:10px;
    vertical-align: middle;
}
</style>