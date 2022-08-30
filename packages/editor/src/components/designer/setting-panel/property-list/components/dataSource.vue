<template>
        <div class="address">
            <span class="address-text">请求地址:</span>
            <el-input
				v-model="advancedProp.dataSource.address"
			/>
        </div>

        <div>
            <span class="type">请求方式:</span>  
            <el-button-group class="ml-4">
                <el-button
                    v-for="(item,index) in types"
                    :class="advancedProp.dataSource.type == item ? 'activation':''"
                    @click="advancedProp.dataSource.type = item"
                    :key="index"
                >{{item}}</el-button>
            </el-button-group>
        </div>
        

        <div class="parameter">
            <span class="parameter-text">参数设置:</span>
            <div  class="parameter-inputs" v-for="(parameter,index) in parameters" :key="index">
                <el-input
                    class="parameter-input"
                    v-model="parameter.key1"
                />
                <el-input
                    class="parameter-input"
                    v-model="parameter.value1"
                />
                <el-button
                    circle
                    class="parameter-del"
                    size="small"
                    style="float: right; margin-top: 10px; margin-right: 20px"
                    type="primary"
                    icon="el-icon-minus"
                    @click="delParameter(index)"
                />
            </div>
            <el-button
                class="parameter-add"
                circle
                type="primary"
                size="small"
                icon="el-icon-plus"
                @click="addParameter"
            />
        </div>

        <div class="data">
            <span class="data-text">发送数据:</span>
            <div  class="data-inputs" v-for="(data,index) in datas" :key="index">
                <el-input
                    class="data-input"
                    v-model="data.key1"
                />
                <el-input
                    class="data-input"
                    v-model="data.value1"
                />
                <el-button
                    circle
                    class="data-del"
                    size="small"
                    style="float: right; margin-top: 10px; margin-right: 20px"
                    type="primary"
                    icon="el-icon-minus"
                    @click="delData(index)"
                />
            </div>
            <el-button
                class="parameter-add"
                circle
                type="primary"
                size="small"
                icon="el-icon-plus"
                @click="addData"
            />
        </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps([
  'advancedProp'
])
const types = ref(['post','get','put','delete'])
const parameters = ref([
    {
        key1:'',
        value1:''
    }
])

const datas = ref([
    {
        key1:'',
        value1:''
    }
])

/**
 * 删除参数
 */
const delParameter = (index) =>{
    parameters.value.splice(index,1)
}

/**
 * 添加参数
 */
const addParameter = () =>{
    parameters.value.push({
        key1:'',
        value1:''
    })
}

/**
 * 删除发送数据
 */
 const delData = (index) =>{
    datas.value.splice(index,1)
}

/**
 * 添加参数
 */
const addData = () =>{
    datas.value.push({
        key1:'',
        value1:''
    })
}
</script>
<style lang="scss" scoped>
    .address{
        margin-bottom:20px;
        &-text{
            display:inline-block;
            margin-bottom:10px;
        }
    }
    .type{
        display:inline-block;
        margin-bottom:10px;
    }
    .parameter{
        margin-top:20px;
        margin-bottom:20px;
        &-text{
            display:inline-block;
            margin-bottom:10px;
        }
        &-inputs{
            margin-bottom:10px;
        }
        &-input{
            width:90px;
            margin-left:10px;
        }
        &-add{
            margin-top:20px;
            margin-left:10px;
        }
    }

    .data{
        margin-top:20px;
        margin-bottom:20px;
        &-text{
            display:inline-block;
            margin-bottom:10px;
        }
        &-inputs{
            margin-bottom:10px;
        }
        &-input{
            width:90px;
            margin-left:10px;
        }
        &-add{
            margin-top:20px;
            margin-left:10px;
        }
    }
</style>