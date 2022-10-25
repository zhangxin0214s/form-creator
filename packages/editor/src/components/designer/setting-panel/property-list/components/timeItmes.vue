<template>
  <div>
    <div class="contents">
      <div style="margin-top: 15px">
        <span>{{ advancedProp.isRange.label }}:</span>
        <el-switch
            style="margin-left: 20px"
            active-color="#13ce66"
            inactive-color="#ff4949"
            v-model="advancedProp.isRange.value"
        />
      </div>
    </div>
    <div v-if="advancedProp.isRange.value == true">
      <div class="contents">
        <span style="display:block; width: 120px">{{ advancedProp.startPlaceholder.label }}:</span>
        <el-input
            clearable
            style="width: 200px"
            v-model="advancedProp.startPlaceholder.value"
        />
      </div>

      <div class="contents">
        <span style="display:block; width: 120px">{{ advancedProp.endPlaceholder.label }}:</span>
        <el-input
            clearable
            style="width: 200px"
            v-model="advancedProp.endPlaceholder.value"
        />
      </div>

      <div class="contents">
        <span style="display:block; width: 120px">{{ advancedProp.rangeSeparator.label }}:</span>
        <el-input
            clearable
            style="width: 200px"
            v-model="advancedProp.rangeSeparator.value"
        />
      </div>
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
