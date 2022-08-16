<template>
  <div v-for="(ite,index) in advancedProp?.optionItems">
    <div style="margin-bottom: 10px;">
      <span class="gutter-label-text">复选框{{ index + 1 }}：</span>
      <el-checkbox
          style="margin-right: 10px"
          :disabled="ite.disabled"
      />
      <el-input style="width: 150px;margin-right: 20px" v-model="ite.label"/>
      <span style="margin-top: 10px; display: inline-block">{{ ite.text }}复选框{{ index + 1 }}：</span>
      <el-switch
          active-color="#ff4949"
          inactive-color="#13ce66"
          v-model="ite.disabled"
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
