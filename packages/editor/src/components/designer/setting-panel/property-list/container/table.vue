<template>
    <div class="input-container">
        <el-collapse v-model="activeNames" class="input-collapse">
            <el-collapse-item name="1" title="高级属性">
                <div>
                    <div class="title" style="margin-right:80px;">列名</div>
                    <div class="title">键名</div>
                </div>
                <div v-for="(item,index) of selectedWidget.options.advanced.tableTitles" :key="index">
                    <el-input class="input" v-model="item.label" ></el-input>
                    <el-input class="input" v-model="item.prop">
                        <template #append>
                            <el-button :icon="Delete" @click="remove(index)" />
                        </template>
                    </el-input>
                </div>
                <el-button type="primary" @click="add" style="margin-top:10px;">添加列</el-button>
            </el-collapse-item>

            <!--事件属性-->
			<el-collapse-item
				name="2"
				title="事件属性"
			>
				<el-divider content-position="center">事件设置</el-divider>
				<div
					v-for="(item,key,index) in eventsProp"
					:key="index"
				>
					<component
						:is="componentMap[getPropCompName(EVENTS_PROPERTIES,key)]"
						:events-prop="eventsProp"
						:value="item"
						:key1="key"
					></component>
				</div>
			</el-collapse-item>
        </el-collapse>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { BASCI_COMPONENTS, BASIC_PROPERTIES,EVENTS_PROPERTIES,} from '../propertyRegister'
import * as basicComponents from '../components/index';
import { Delete } from '@element-plus/icons-vue'
const props=defineProps([
    'selectedWidget',
    'basicProp',
    'advancedProp',
    'eventsProp',
])
const componentMap = {
  ...basicComponents
}
const activeNames = ref(['1','2'])
const getPropCompName = (properties, key) => {
	return BASCI_COMPONENTS[properties[key]];
};
const add = () => {
    props.selectedWidget.options.advanced.tableTitles.push({label:"", prop:""})
};
const remove =(index) =>{
    props.selectedWidget.options.advanced.tableTitles.splice(index,1)
}
</script>
<style lang="scss" scoped>
.title{
    display: inline-block;
    font-size:16px;
    margin-bottom:7px;
    color:#606266;
}
.addBtn {
    height: 50px;
}
.input{
    width:110px;
}
</style>
