<template>
    <el-table
      :class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        v-for="(item,index) of widget.options.advanced.tableTitles"
        :key="index"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
    </el-table>
</template>
<script>
  export default {
    name: 'fcTable'
  }
</script>
<script setup>
  import containerMask from "../../common/containerMask.vue"
  import { watch } from 'vue'

  const tableData=[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]

  const props=defineProps([
    'widget',
    'ruleForm',
    'propKey',
    'parent',
    'ruleFormRef',
    'selectedWidget',
    'isEditor'
  ])

  watch(
    () => props.propKey,
    (value) => {
      const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
      console.log("监听到数据变化",ruleFormKey)
      if(ruleFormKey && !props.ruleForm[ruleFormKey]){
        props.ruleForm[ruleFormKey] = {}
      }
})
</script>
 <style lang="scss" scoped>
  .select {
    outline:1px solid $--color-primary;
 }
 .select {
    outline:1px solid $--color-primary;
 }
 </style>