<template>
  <el-form-item v-for="item in PROPS.list">
    <el-collapse-item>
      <template #title>
        <el-input
          v-model="item.label"
          :placeholder="item.label">
          <template #prepend>
            <el-button :icon="Plus" @click.native="addChild(item)" />
          </template>
          <template #append>
            <el-button :icon="Delete" @click.native="deleteList(item)" />
          </template>
        </el-input>
      </template>
      <component v-if="item.children.length>0" :is="selectNode" :list="item.children"></component>
    </el-collapse-item>
  </el-form-item>
</template>

<script setup>
  import { Delete, Plus, CirclePlusFilled } from '@element-plus/icons-vue'
  import { ref } from 'vue';
  import selectNode from './selectNode';

  const PROPS = defineProps(['list'])
  const addChild = (parentMsg) => {
    parentMsg.children.push({
      id: `${parentMsg.id}-${parentMsg.children.length}`,
      label: `新选项${parentMsg.children.length}`,
      children: []
    })
  }
  const deleteList = (parentMsg) => {
    let delIndex = PROPS.list.findIndex(option=>option.id===parentMsg.id);
    PROPS.list.splice(delIndex, 1);
    PROPS.list.forEach((child,index) => {
      child.id = `${parentMsg.id}-${index}`
    })
  }
</script>

<style lang="css" scoped>
</style>
