<template>
  <el-card type="border-card" :class="[selectedWidget?.id === widget?.id && isEditor?'select':'']" >
    <template #header>
    <div class="card-header">
      <span>{{widget.title}}</span>
    </div>
  </template>
  <card-content 
      :widgetList="widget.options.advanced.widgetList"
      :prop-key="propKey"
      :widget="widget"
      :rule-form="ruleForm[widget.ruleFormKey] || ruleForm"
      :is-editor="isEditor"
      :selected-widget="selectedWidget">
      <slot 
        name="widgetChild"
        v-bind="{
          colWidget:widget.options.advanced, 
          propKey,
          ruleForm: ruleForm[widget.ruleFormKey] || ruleForm,
          index:null
        }">
      </slot>
  </card-content>
  </el-card>
</template>
<script setup name="card">
  import containerMask from "../../common/containerMask.vue"
  import cardContent from "./content.vue"
  import { watch } from 'vue'

  const props=defineProps([
    'widget',
    'ruleForm',
    'propKey',
    'parent',
    'ruleFormRef',
    'selectedWidget',
    'isEditor'
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