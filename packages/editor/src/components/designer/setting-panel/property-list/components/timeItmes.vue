<template>
  <div>
    <div class="contents">
      <span style="display: inline-block;width: 100px">{{ advancedProp.label }}:</span>
      <el-select
          style="width:170px"
          v-model="advancedProp.value"
          placeholder="请输入关键词"
      >
        <el-option
            v-for="(ite,index) in advancedProp?.dateType"
            :label="ite.label"
            :value="ite.value"
            :key="index"
        />
      </el-select>
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
}
</style>
