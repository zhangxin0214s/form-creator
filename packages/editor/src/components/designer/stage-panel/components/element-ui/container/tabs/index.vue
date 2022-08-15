<template>
  <container-mask :widget="widget">
    <el-tabs type="card">
      <el-tab-pane label="tab 1" v-for="(colWidget, colIdx) in widget.options.advanced.cols" :key="colIdx">
        <tabs-content 
          :colWidget="colWidget"
        ></tabs-content>
      </el-tab-pane>
    </el-tabs>
  </container-mask>
</template>
<script setup>
  import { widgetStore } from '@/store/index';
  import { storeToRefs } from 'pinia';
  import containerMask from "../../common/containerMask.vue"
  import tabsContent from "./content.vue"
  const _widgetStore = widgetStore();
  const { selectedWidget} = storeToRefs(_widgetStore);
  defineProps([
      'widget'
  ])

</script>
 <style lang="scss" scoped>
 .grid-container{
    padding:1px;
    outline:1px dashed #444;
 }
 .select {
    outline:1px dashed $--color-primary;
 }
 .el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  border:1px dashed #444;
}
 </style>