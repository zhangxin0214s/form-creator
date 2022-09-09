<template>
    <container-mask 
      :widget="widget"
      :rule-form="ruleForm"
      :parent="parent"
      :is-editor="isEditor"
      :selected-widget="selectedWidget">
      <el-tabs type="border-card" v-model="activeName" :class="[selectedWidget?.id === widget?.id && isEditor?'select':'']" :addable="widget.addable" :closable="widget.closable"  @tab-add="addTabsHandler" @tab-remove="removeTabsHandler1($event)">
        <el-tab-pane :label="colWidget.name" :name="colWidget.id" v-for="(colWidget, colIdx) in widget.options.advanced.cols" :key="colIdx">
          <tabs-content 
            :colWidget="colWidget"
            :rule-form="ruleForm[widget.ruleFormKey] || [{}]"
            :widget="widget"
            :prop-key="propKey"
            :colIdx="colIdx"
            :selected-widget="selectedWidget"
            :is-editor="isEditor">
          </tabs-content>
        </el-tab-pane>
      </el-tabs>
    </container-mask>
  </template>
  <script setup name="tabs">
    import containerMask from "../../common/containerMask.vue"
    import tabsContent from "./content.vue"
    import { watch } from "vue"
    const props=defineProps([
      'widget',
      'parent',
      'propKey',
      'ruleForm',
      'ruleFormRef',
      'selectedWidget',
      'isEditor'
    ])
  
    watch(
      () => props.propKey,
      (value) => {
        console.log("监听到数据变化")
        const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
        if(ruleFormKey && !props.ruleForm[ruleFormKey]){
          props.ruleForm[ruleFormKey] = [{}]
        }
    })
    let activeName=props.widget.options.advanced.cols[0].id
    const addTabsHandler=()=>{
      let maxCount=props.widget.maxCount
      if(maxCount<=0 || props.widget.options.advanced.cols.length<maxCount){
          props.widget.options.advanced.cols.push({
            id:guid(),
            name:"名称",
            widgetList:[]
          })
          const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
          ruleFormKey && props.ruleForm[ruleFormKey].push({})
      }
    }
    const removeTabsHandler1=(name)=>{
      console.log(name)
      const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
      let cols=props.widget.options.advanced.cols
      if(cols.length===1){
        return 
      }
      for(let i=0;i<cols.length;i++){
        if(cols[i].id===name){
          cols.splice(i,1)
          props.ruleForm[ruleFormKey].splice(i,1)
          return 
        }
      }
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
    .select {
      outline:1px solid $--color-primary;
   }
   .grid-container{
      padding:1px;
   }
   .select {
      outline:1px solid $--color-primary;
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