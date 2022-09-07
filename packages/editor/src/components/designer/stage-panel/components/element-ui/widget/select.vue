<template>
  <widget-mask
    :widget="widget"
    :basic-prop="basic"
    :advanced-prop="advanced"
    :parent-widget="parentWidget"
		:prop-key="propKey"
		:rule-form="ruleForm"
		:parent="parent">
    <el-cascader
        v-model="widget.value"
        :options="advanced.data"
        :disabled="basic.disabled.value"
        :placeholder="basic.defaultValue.value"
        @change="handleChangeEvent(props,ElMessage)"
    />
  </widget-mask>

</template>

<script setup>
  import widgetMask from '../common/widgetMask.vue';
  import { ElMessage } from 'element-plus'
  import { watch} from 'vue';
  import { handleChangeEvent } from '../hooks/handleChangeEvent'
  import { watchEvent } from '../hooks/watchEvent'
  const props = defineProps(['widget', 'widgetType','ruleForm', 'propKey','parent', 'parentWidget']);
  const {basic, advanced} = props.widget.options;
  watchEvent(props,watch)

</script>

<style scoped>
</style>
