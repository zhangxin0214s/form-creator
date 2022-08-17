<template>
  <widget-mask :widget="widget" :basicProp="BASIC">
    <el-select v-model="BASIC.list.showList" :placeholder="BASIC.placeholder.value">
      <el-option
        v-for="item in BASIC.list.options"
        v-show="item?.checked"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        >
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
