<template>
  <container-mask :widget="widget">
    <el-row class="grid-container" :class="[selectedWidget?.id === widget?.id?'select':'']">
      <template v-for="(colWidget, colIdx) in widget.options.advanced.cols" :key="colIdx">
        <Col 
          :colWidget="colWidget"
        >
        </Col>
    </template>  
    </el-row>
  </container-mask>
  
</template>
<script setup>
  import { widgetStore } from '@/store/index';
  import { storeToRefs } from 'pinia';
  import containerMask from "../../common/containerMask.vue"
  import Col from "./grid-col.vue"
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