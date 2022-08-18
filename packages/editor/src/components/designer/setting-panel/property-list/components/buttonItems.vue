<template>
  <div>
    <span style="margin-right: 20px">{{advancedProp.label}}:</span>
    <el-select v-model="advancedProp.value" clearable>
      <el-option
          v-for="(ite,index) in advancedProp?.btnIcon"
          :label="ite.label"
          :value="ite.value"
          :key="index"
      />
    </el-select>
  </div>
</template>
<script setup>

const props = defineProps([
  'advancedProp'
])

</script>
<style lang="scss" scoped>
.gutter-label-text {
  margin-right: 10px;
}
</style>
