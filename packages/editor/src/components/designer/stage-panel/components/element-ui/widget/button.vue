<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced"
      :parent-widget="parentWidget">
      <el-button
          :icon="widget.options.advanced.value"
          :type="widget.options.basic.type.value"
          :disabled="widget.options.basic.disabled.value"
          :size="widget.options.basic.btnSize.value"
          :round="widget.options.advanced.btnRound.value"
          :circle="widget.options.advanced.btnCircle.value"
          @click="handleOnClick(props,emit)"
      >{{ widget.options.basic.text.value }}
      </el-button>
  </widget-mask>
</template>

<script setup>
import FormInstance  from 'element-plus';
import {onMounted,onBeforeMount } from 'vue'
import widgetMask from '../common/widgetMask.vue'
import useRegisterEvent from '../hooks/useRegisterEvent copy'
import { defineProps,defineEmits } from 'vue';
import { ref } from 'vue'
let props = defineProps([
  'widget',
  'parentWidget',
  'ruleFormRef'
]);
const { handleOnClick,handleOnBeforeMount,handleOnMounted} = useRegisterEvent();

const emit = defineEmits(['submitForm'])
const submitForm = async () => {
  emit('submitForm')
  // if (!props.ruleFormRef) return
  // await props.ruleFormRef.validate((valid, fields) => {
  //   console.log(valid,"===valid===")
  //   if (valid) {
  //     console.log('submit!')
  //   } else {
  //     console.log('error submit!', fields)
  //   }
  // })
}

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
