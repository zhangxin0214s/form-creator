<template>
  <el-tree :data="PROPS.data" default-expand-all :expand-on-click-node="false">
    <template #default="{ node, data }">
      <el-input class="custom-tree-node" v-model="data.value" placeholder="value">
        <template #prepend>
          <el-button :icon="Plus" @click.native="append(data)" />
        </template>
      </el-input>
      <el-input class="custom-tree-node" v-model="data.label" placeholder="label">
        <template #append>
          <el-button :icon="Delete" @click.native="remove(node, data)" />
        </template>
      </el-input>
     </template>
  </el-tree>
</template>

<script setup>
  import { Delete, Plus, CirclePlusFilled } from '@element-plus/icons-vue'
  import { ref } from 'vue';
  import selectNode from './selectNode.vue';

  const PROPS = defineProps(['data']);

  const append = (data) => {
    const newChild = {
      id: `${data.id}-${data.data.length}`,
      data:[],
      value:'',
      label: '',
      children: []
    }
    if (!data.children) data.children = [];
    data.children.push(newChild)
  }

  const remove = (node, data) => {
    let parent = node.parent,
        children = parent.data.children || parent.data,
        delIndex = children.findIndex(child=>child.id===data.id);
    children.splice(delIndex, 1);
    children.forEach((child,index) => {
      child.id = `${parent.data.id}-${index}`
    })
  }
</script>

<style lang="scss">
  .el-tree>.el-tree-node {
    margin-bottom: 10px;
  }
  .el-tree-node__content {
    height: auto;
  }
  .el-input-group__prepend {
    padding: 0px 16px;
    >button {
      padding: 6px 8px;
    }
  }
  .el-input-group__append {
    padding: 0px 16px;
    >button {
      padding: 6px 8px;
    }
  }
</style>
