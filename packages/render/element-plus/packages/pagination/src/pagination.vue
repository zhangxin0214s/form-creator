<template>
<div>
  111111
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
  const { handleOnBeforeMount } = useRegisterEvent();

  const props=defineProps([
    'widget',
    'ruleForm',
    'propKey',
    'parent',
    'ruleFormRef',
    'selectedWidget',
    'isEditor'
  ])
</script>
 <style lang="scss" scoped>

 </style>