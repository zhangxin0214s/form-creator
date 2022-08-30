<template>
  <div class="setOptions">
    <span>使用数据源:</span>
    <el-switch  class="optionsType" v-model="optionsType" />
  </div>

  <!-- 动态数据 -->
  <div v-if="optionsType">
    使用动态数据
  </div>

  <!-- 静态数据 -->
  <div v-else>
    <div v-for="(ite,index) in advancedProp?.optionItems">
    <div style="margin-bottom: 10px;">
      <span class="gutter-label-text">复选框{{ index + 1 }}：</span>
      <el-checkbox
          style="margin-right: 10px"
          :disabled="ite.disabled"
          v-model="ite.isSelect"
      />
      <el-input style="width: 150px;margin-right: 10px" v-model="ite.label"/>
      <span style="margin-top: 10px; display: inline-block">{{ ite.text }}复选框{{ index + 1 }}：</span>
      <el-button
          circle
          size="small"
          style="float: right; margin-top: 10px; margin-right: 20px"
          type="primary"
          icon="el-icon-minus"
          @click="delCheckbox(ite)"
      />
      <el-switch
          active-color="#ff4949"
          inactive-color="#13ce66"
          v-model="ite.disabled"
      />
    </div>
    </div>
    <el-button
        circle
        type="primary"
        size="small"
        icon="el-icon-plus"
        @click="addCheckbox"
    />
  </div>
  
</template>
<script setup>
import { ref } from 'vue'

const optionsType = ref(false)
const props = defineProps([
  'advancedProp'
])
const addCheckbox = () => {
  props.advancedProp.optionItems.push(
      {
        label:`check${props.advancedProp.optionItems.length + 1}`,
        value:props.advancedProp.optionItems.length + 1,
        disabled:false,
        text:'是否禁用',
        isSelect:false
      })
}

const delCheckbox = (ite) => {
  props.advancedProp.optionItems = props.advancedProp.optionItems.filter(item=>item.value != ite.value)
}
</script>
<style lang="scss" scoped>
.gutter-label-text {
  margin-right: 10px;
}
.optionsType {
  margin-left:10px;
}
</style>
