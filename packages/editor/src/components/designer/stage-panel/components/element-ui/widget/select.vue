<template>
  <widget-mask :widget="widget" :basicProp="BASIC">
    <el-select v-model="BASIC.content.default" :placeholder="BASIC.placeholder.value">
      <el-option
        v-for="item in BASIC.content.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </widget-mask>

</template>

<script setup>
  import widgetMask from '../common/widgetMask.vue';
  const PROPS = defineProps(['widget'])
  const BASIC = PROPS.widget.options.basic;
</script>

<style scoped>

</style>
