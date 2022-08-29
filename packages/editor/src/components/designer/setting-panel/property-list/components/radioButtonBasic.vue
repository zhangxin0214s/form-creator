<template>
  <el-form
      label-position="left"
      label-width="100px"
      :model="basicProp"
      style="max-width: 360px"
  >
    <el-form-item
        v-if="basicProp[key1]?.label"
        :label="`${basicProp[key1]?.label}:`"
    >
      <el-radio-group v-model="basicProp[key1].value">
        <el-radio-button
            v-for="(item, index) in basicProp[key1].options"
            :key="index"
            :label="item.value"
        >
          {{item.label}}
        </el-radio-button>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps(['basicProp', 'key1', 'value']);
</script>
<style lang="scss" scoped>

</style>
