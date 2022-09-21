<template>
  <div>
    <div v-for="(col,index) in advancedProp?.cols" :key="index">
        <div class="name">名称:</div>
        <el-input style="display:inline-block;width: 60px;" v-model="col.name"/>
        <el-icon v-if="advancedProp.cols.length>1" class="deleteBtn" :size="21" color="var(--el-text-color-secondary)" @click="deleteTab(index)">
            <RemoveFilled />
        </el-icon>
    </div>
    <div class="operate">
        <el-button link type="primary" @click="addCol">增加页签</el-button>
    </div>
  </div>
</template>
<script setup>
import inputBase from "./inputBasic.vue"
const props = defineProps([
    'advancedProp'
])
const deleteTab = (index) =>{
    props.advancedProp.cols.splice(index,1)
}
const addCol = () =>{
    props.advancedProp.cols.push(
        {
            id:guid(),
            name:`${props.advancedProp.cols[0].name}`,
            ruleFormKey: {label: "参数key", value: ""},
            widgetList:[]
        }
    )
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
.name{
    display: inline-block;
    font-size: 14px;
    margin-right:10px;
}
.deleteBtn{
    width:18.4px;
    cursor:pointer;
    display: inline-block;
    top:5px;
    margin-left:10px;
}
.operate{
    margin-top:10px;
    display: inline-block;
}
</style>
