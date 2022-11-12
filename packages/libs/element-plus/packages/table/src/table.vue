<template>
  <el-table
    :class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
    :data="widget.options.advanced.tableValues"
    style="width: 100%">
    <el-table-column
      v-for="(item,index) of widget.options.advanced.tableTitles"
      :key="index"
      :prop="item.prop"
      :label="item.label">
    </el-table-column>
    <el-table-column
      v-if="widget.options.advanced.btns && widget.options.advanced.btns.length>0"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button v-for="(btn,index) of widget.options.advanced.btn"
                   :key="index"
                   type="text"
                   @click="btnClick(btn.value)"
                   size="small">{{btn.name}}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
  export default {
    name: 'fcTable'
  }
</script>
<script setup>
  import { onBeforeMount,watch } from 'vue';
  import useRegisterEvent from '../../hooks/useRegisterEvent';
  import containerMask from "../../common/containerMask.vue"

  const props=defineProps([
    'widget',
    'ruleForm',
    'propKey',
    'parent',
    'ruleFormRef',
    'selectedWidget',
    'isEditor'
  ])
  const { handleOnBeforeMount } = useRegisterEvent({props});
  /**
   * 渲染前
   */
  onBeforeMount(() => {
    handleOnBeforeMount();
  });

  const btnClick = (value) => {
    console.log(value)
  }

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