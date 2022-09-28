<template>
  <el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select layout':'layout']"
    :style="`
      text-align:center;
			margin-left:${widget.options.basic.marginAdjustment?.options[0].value}px;
			margin-top:${widget.options.basic.marginAdjustment?.options[1].value}px;
			margin-right:${widget.options.basic.marginAdjustment?.options[2].value}px;
			margin-bottom:${widget.options.basic.marginAdjustment?.options[3].value}px
		`"

	>
    <el-pagination
      style="display:inline-flex"
      background
      layout="prev, pager, next"
      :total="widget.options.advanced.total"
      :page-size="widget.options.advanced.pageSize"
      v-model:currentPage="widget.options.advanced.currentPage"
      @current-change="handleOnChange()"
      >
    </el-pagination>
  </el-form-item>
</template>
<script>
  export default {
    name: 'fcPagination'
  }
</script>
<script setup>
  import { onBeforeMount,watch,inject } from 'vue';
  import { widgetStore } from '@/store/index';
  import useRegisterEvent from '../../hooks/useRegisterEvent';
  import containerMask from "../../common/containerMask.vue"
  const { handleOnBeforeMount,handleOnChange } = useRegisterEvent({props});
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
// 选中样式
.select {
	outline: 1px solid $--color-primary;
}
 </style>
 <style lang="scss">
  .layout{
    .el-form-item__content{
      display: block;
    }
  }
 </style>

 