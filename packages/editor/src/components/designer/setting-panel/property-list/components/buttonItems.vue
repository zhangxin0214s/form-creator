<template>
  <div>
    <span style="margin-right: 20px">{{ advancedProp.label }}:</span>
    <el-select
        v-model="advancedProp.value"
        clearable
        filterable
        placeholder="请输入关键词"
    >
      <el-option
          v-for="(ite,index) in advancedProp?.btnIcon"
          :label="ite.label"
          :value="ite.value"
          :key="index"
      />
    </el-select>

    <div style="margin-top: 15px">
      <span>{{ advancedProp.btnRound.label }}:</span>
      <el-switch
          style="margin-left: 20px"
          active-color="#ff4949"
          inactive-color="#13ce66"
          v-model="advancedProp.btnRound.value"
      />
    </div>

    <div style="margin-top: 15px">
      <span>{{ advancedProp.btnCircle.label }}:</span>
      <el-switch
          style="margin-left: 20px"
          active-color="#ff4949"
          inactive-color="#13ce66"
          v-model="advancedProp.btnCircle.value"
      />
    </div>
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
