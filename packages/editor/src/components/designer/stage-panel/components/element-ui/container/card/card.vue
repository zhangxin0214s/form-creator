<template>
  <container-mask 
    :widget="widget"
    :rule-form="ruleForm"
		:parent="parent">
    <el-card type="border-card" :class="[selectedWidget?.id === widget?.id && isEditor?'select':'']" >
      <template #header>
      <div class="card-header">
        <span>{{widget.options.basic.label.value}}</span>
      </div>
    </template>
    <card-content 
        :widgetList="widget.options.advanced.widgetList"
        :prop-key="propKey"
        :widget="widget"
        :rule-form="ruleForm[widget.ruleFormKey] || ruleForm"
      >
    </card-content>
    </el-card>
  </container-mask>
</template>
<script setup>
  import { widgetStore } from '@/store/index';
  import { storeToRefs } from 'pinia';
  import containerMask from "../../common/containerMask.vue"
  import tabsContent from "./content.vue"
  import cardContent from "./content.vue"
  import { watch } from 'vue'
  const _widgetStore = widgetStore();
  const { selectedWidget,isEditor} = storeToRefs(_widgetStore);
  const props=defineProps([
    'widget',
    'ruleForm',
    'propKey',
    'parent',
    'ruleFormRef'
  ])
  watch(
    () => props.propKey,
    (value) => {
      const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
      console.log("监听到数据变化",ruleFormKey)
      if(ruleFormKey && !props.ruleForm[ruleFormKey]){
        props.ruleForm[ruleFormKey] = {}
      }
})
</script>
 <style lang="scss" scoped>
  .select {
    outline:1px solid $--color-primary;
 }
 .select {
    outline:1px solid $--color-primary;
 }
 </style>
