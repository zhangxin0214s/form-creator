<template>
    <widget-mask
        :widget="widget"
        :basicProp="widget.options.basic"
        :advancedProp="widget.options.advanced"
        :parent-widget="parentWidget"
        :is-editor="isEditor"
            :selected-widget="selectedWidget">
        <el-button
            :icon="widget.options.advanced.value"
            :type="widget.options.basic.btnType.value"
            :disabled="widget.options.basic.disabled.value"
            :size="widget.options.basic.btnSize.value"
            :round="widget.options.advanced.btnRound.value"
            :circle="widget.options.advanced.btnCircle.value"
            :plain="widget.options.basic.plain.value"
            :auto-insert-space="widget.options.basic.space.value"
            @click="handleOnClick(props,inject)"
        >{{ widget.options.basic.text.value }}
        </el-button>
    </widget-mask>
  </template>
  
  <script setup name="button">
  import {onMounted,onBeforeMount,inject } from 'vue'
  import widgetMask from '../../common/widgetMask.vue'
  import useRegisterEvent from '../../hooks/useRegisterEvent'
  
  let props = defineProps([
    'widget',
    'parentWidget',
    'ruleFormRef',
    'isEditor',
    'selectedWidget'
  ]);
  const { handleOnClick,handleOnBeforeMount,handleOnMounted} = useRegisterEvent();
  
  
  /**
   * 渲染前
   */
  onBeforeMount(() =>{
    handleOnBeforeMount(props.widget)
  })
  
  /**
   * 渲染后
   */
  onMounted(() =>{
    handleOnMounted(props.widget)
  })
  </script>
  
  <style scoped>
  
  </style>
  