<template>
  <container-mask :widget="widget">
    <el-tabs :addable="widget.addable" :closable="widget.closable" type="card" @tab-add="addTabsHandler" @tab-remove="removeTabsHandler1($event)">
      <el-tab-pane :label="colWidget.name" v-for="(colWidget, colIdx) in widget.options.advanced.cols" :key="colIdx">
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
  const props=defineProps([
      'widget'
  ])
  const addTabsHandler=()=>{
    props.widget.options.advanced.cols.push({
      id:guid(),
      name:"名称",
      widgetList:[]
    })
  }
  const removeTabsHandler1=(a)=>{
    console.log(1111)
  }
  const guid=()=>{
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0,
              v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
  }

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