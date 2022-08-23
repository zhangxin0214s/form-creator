<template>
  <div>
    <div class="contents">
      <span style="display: inline-block;width: 100px">{{ advancedProp.label }}:</span>
      <el-select
          style="width:170px"
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
    </div>

    <div style="margin-top: 15px">
      <span>{{ advancedProp.btnRound.label }}:</span>
      <el-switch
          style="margin-left: 20px"
          active-color="#13ce66"
          inactive-color="#ff4949"
          v-model="advancedProp.btnRound.value"
      />
    </div>

    <div style="margin-top: 15px">
      <span>{{ advancedProp.btnCircle.label }}:</span>
      <el-switch
          style="margin-left: 20px"
          active-color="#13ce66"
          inactive-color="#ff4949"
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

.contents {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
