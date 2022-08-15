<template>
    <div class="gutter" v-for="(col,index) in advancedProp?.cols" :key="index">
        <div class="gutter-label">
            <div class="gutter-label-text">第{{index+1}}列</div>
            <el-icon class="gutter-label-sub" :size="21" color="var(--el-text-color-secondary)" @click="subCol(col)">
                <RemoveFilled />
            </el-icon>
        </div>
        
        <div class="gutter-slider">
            <el-slider 
                v-model="col.gutter" 
                :step="2" 
                :min="0"
                :max="24"
                show-stops 
            />
        </div>
    </div>
    <div class="operate">
        <el-button link type="primary" @click="addCol">增加列</el-button>
    </div>
</template>
<script setup>
const props = defineProps([
    'advancedProp'
])
const subCol = (col) =>{
    console.log("删除",props.advancedProp.cols)
    props.advancedProp.cols = props.advancedProp.cols.filter(item=>item.id != col.id);
}
const addCol = () =>{
    console.log("增加列")
    props.advancedProp.cols.push(
        {
            id:props.advancedProp.cols.length,
            gutter:2,
            widgetList:[]
        }
    )
}
</script>
<style lang="scss" scoped>
.gutter {
    &-label{
        width:100;
        &-text{
            font-size: 14px;
            color: var(--el-text-color-secondary);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 0;
            float:left;
        }
        &-sub{
            width:100px;
            float:right;
            cursor:pointer;
            margin-right:10px;
        }
    }
    &-slider{
        width:240px;
        margin-left:12px;
    }
}
.operate{
    margin-top:10px;
}
</style>