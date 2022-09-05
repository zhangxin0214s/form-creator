<template>
  <widget-mask :widget="widget" :basic-prop="basic" :advanced-prop="advanced">
    <el-cascader
        v-model="widget.value"
        :options="advanced.data"
        :disabled="basic.disabled.value"
        :placeholder="basic.defaultValue.value"
    />
  </widget-mask>

</template>

<script setup>
  import widgetMask from '../common/widgetMask.vue';
  const PROPS = defineProps(['widget'])
  const {basic, advanced} = PROPS.widget.options;
</script>

<style scoped>

</style>
