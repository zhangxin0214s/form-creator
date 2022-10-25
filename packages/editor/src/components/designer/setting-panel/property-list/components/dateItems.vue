<template>
  <div>
    <div class="contents">
      <span style="display: inline-block;width: 100px">{{ advancedProp.label }}:</span>
      <el-select
          clearable
          style="width:170px"
          v-model="advancedProp.value"
          placeholder="请选择日期格式"
      >
        <el-option
            v-for="(ite,index) in advancedProp?.dateType"
            :label="ite.label"
            :value="ite.value"
            :key="index"
        />
      </el-select>
    </div>

    <div class="contents">
      <span style="display:block; width: 120px">{{advancedProp.startPlaceholder.label}}:</span>
      <el-input
          clearable
          style="width: 200px"
          v-model="advancedProp.startPlaceholder.value"
      />
    </div>

    <div class="contents">
      <span style="display:block; width: 120px">{{advancedProp.endPlaceholder.label}}:</span>
      <el-input
          clearable
          style="width: 200px"
          v-model="advancedProp.endPlaceholder.value"
      />
    </div>

    <div class="contents">
      <span style="display:block; width: 120px">{{advancedProp.rangeSeparator.label}}:</span>
      <el-input
          clearable
          style="width: 200px"
          v-model="advancedProp.rangeSeparator.value"
      />
    </div>
  </div>
</template>

<script setup>

const props = defineProps([
  'advancedProp'
])
</script>

<style scoped>
.contents {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
</style>
