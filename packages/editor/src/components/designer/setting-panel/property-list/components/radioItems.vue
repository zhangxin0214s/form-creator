<template>
  <div v-for="(ite,index) in advancedProp?.optionItems">
    <div style="margin-bottom: 10px;">
      <span class="gutter-label-text">单选框{{ index + 1 }}：</span>
      <div>
        <span class="gutter-label-text">value值:</span>
        <el-input style="width: 150px;margin-right: 10px" v-model="ite.value"/>
      </div>
      <div>
        <span class="gutter-label-text">label值:</span>
        <el-input style="width: 150px;margin-right: 10px" v-model="ite.label"/>
      </div>
      <span style="margin-top: 10px; display: inline-block">{{ ite.text }}单选框{{ index + 1 }}：</span>
      <el-button
          circle
          size="small"
          style="float: right; margin-top: 10px; margin-right: 20px"
          type="primary"
          icon="el-icon-minus"
          @click="delCheckbox(ite,index)"
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
</template>
<script setup>

const props = defineProps([
  'advancedProp'
])

const addCheckbox = () => {
  props.advancedProp.optionItems.push(
      {
        label:`label值${props.advancedProp.optionItems.length + 1}`,
        value:`value值${props.advancedProp.optionItems.length + 1}`,
        disabled:false,
        text:'是否禁用',
      })
}

const delCheckbox = (ite, index) => {
  props.advancedProp.optionItems.splice(index, 1)
  props.advancedProp.optionItems.forEach((item, i) => {
    item.label = 'label值' + (i + 1);
    item.value = 'value值' + (i + 1)
  })
  // props.advancedProp.optionItems = props.advancedProp.optionItems.filter(item => item.value != ite.value)
}
</script>
<style lang="scss" scoped>
.gutter-label-text {
  display: inline-block;
  width: 100px;
  margin-top: 20px;
}
</style>
