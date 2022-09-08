<template>
  <container-mask 
    :widget="widget"
    :rule-form="ruleForm"
		:parent="parent"
    :is-editor="isEditor"
		:selected-widget="selectedWidget">
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
				:selected-widget="selectedWidget"
        @onEnd="onEnd1"
        @selected="selected1"
        @copyWidget="copyWidget1"
        @removeWidget="removeWidget1"
      >
    </card-content>
    </el-card>
  </container-mask>
</template>
<script setup>
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
  const emit = defineEmits(['selected1','copyWidget1','removeWidget1','onEnd1']);
  const selected1 = (element) =>{
    emit('selected1',element)
  }
  const copyWidget1 = (element) =>{
      emit('copyWidget1',element)
  }

  const removeWidget1 = (widget, parentWidget) =>{
    emit('removeWidget1',widget, parentWidget)
  }

  const onEnd1 = () =>{
    emit('onEnd1')
  }
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