<template>
    <div class="select-container">
        <el-collapse v-model="activeNames" class="input-collapse">
            <el-collapse-item name="1" title="基础属性">
                <div v-for="(item,key,index) in basicProp" :key="index">
                    <component
                        :is="componentMap[getBasicCompName(key)]"
                        :basic-prop="basicProp"
                        :value = "item.value"
                        :key1 = "key"
                    >
                    </component>
                </div>
            </el-collapse-item>

            <el-collapse-item name="2" title="高级属性">
              <el-divider content-position="center">选项设置</el-divider>
              <div v-for="(item,key,index) in advancedProp" :key="index">
                  <component
                      :is="componentMap[getAdvancedCompName(key)]"
                      :advanced-prop="advancedProp"
                      :value = "item.value"
                      :key1 = "key"
                  >
                  </component>
              </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script setup>
  import { ref } from "vue"
  import { BASCI_COMPONENTS, BASIC_PROPERTIES, ADVANCED_COMPONENTS, ADVANCED_PROPERTIES} from '../propertyRegister'
  import * as components from '../components/index';

  const props = defineProps([
    'basicProp', 'advancedProp'
  ])
  const componentMap = {
    ...components
  }

  const activeNames = ref(['1', '2', '3'])

  const getBasicCompName = (key) =>{
    return BASCI_COMPONENTS[BASIC_PROPERTIES[key]]
  }

  const getAdvancedCompName = (key)=>{
    return ADVANCED_COMPONENTS[ADVANCED_PROPERTIES[key]]
  }
</script>
<style lang="scss" scoped>
</style>
