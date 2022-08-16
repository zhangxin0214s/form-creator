<template>
  <div v-for="(ite,index) in advancedProp?.optionItems">
    <div style="margin-bottom: 10px;">
      <span class="gutter-label-text">复选框{{ index + 1 }}：</span>
      <el-checkbox
          style="margin-right: 10px"
          :disabled="ite.disabled"
          v-model="ite.isSelect"
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
  <div>
    <el-button type="text" @click="addCheckbox">增加选项</el-button>
    <el-button style="float: right" type="text" @click="delCheckbox()">删除选项</el-button>
  </div>
</template>
<script setup>

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

const delCheckbox = () => {
  props.advancedProp.optionItems.splice(props.advancedProp.optionItems.length - 1, 1)
}
</script>
<style lang="scss" scoped>
.gutter-label-text {
  margin-right: 10px;
}
</style>
