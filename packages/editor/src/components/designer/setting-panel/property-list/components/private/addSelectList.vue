<template>
  <el-form>
    <el-form-item v-if="children.length>0">
      <component :is="selectNode" :list="children"></component>
    </el-form-item>
    <el-form-item @click.native="addList">
      <el-icon><Plus /></el-icon>
      <span>添加选项</span>
    </el-form-item>
	</el-form>
</template>

<script setup>
  import { Delete, Plus, CirclePlusFilled } from '@element-plus/icons-vue'
  import { ref } from 'vue';
  import selectNode from './selectNode.vue';

  const PROPS = defineProps(['advancedProp'])
  const {children} = PROPS.advancedProp.selectConfig;
  const addList = () => {
    children.push({
      id: children.length,
      label: '选项',
      // label: `新选项${children.length}`,
      children: []
    })
  }

</script>
