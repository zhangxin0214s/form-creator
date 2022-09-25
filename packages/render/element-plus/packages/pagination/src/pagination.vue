<template>
  <div style="text-align:center;">
    <el-pagination
      style="display: inline-flex;"
      background
      layout="prev, pager, next"
      :total="widget.options.advanced.total"
      :page-size="widget.options.advanced.pageSize"
      v-model:currentPage="widget.options.advanced.currentPage"
      >
    </el-pagination>
  </div>
</template>
<script>
  export default {
    name: 'fcPagination'
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
</script>
 <style lang="scss" scoped>

 </style>