<template>
  <div class="textarea-container">
    <el-collapse
        v-model="activeNames"
        class="textarea-collapse"
    >

      <el-collapse-item
          name="2"
          title="高级属性"
      >
      <div>
        <div style="display:inline-block;">每页数量</div>
        <el-input :formatter="toInt" style="width:100px;margin-left:20px;" class="input" v-model="selectedWidget.options.advanced.pageSize" ></el-input>
      </div>

      </el-collapse-item>

      <!--事件属性-->
			<el-collapse-item
				name="3"
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
import { ref } from 'vue';
import { BASCI_COMPONENTS, BASIC_PROPERTIES, ADVANCED_PROPERTIES,EVENTS_PROPERTIES, } from '../propertyRegister';
import * as basicComponents from '../components/index';

const props = defineProps(['selectedWidget', 'basicProp', 'advancedProp','eventsProp',]);
const componentMap = {
  ...basicComponents,
};

const activeNames = ref(['2','3']);

const getPropCompName = (properties, key) => {
	return BASCI_COMPONENTS[properties[key]];
};
const getAdvancedCompName = (key) => {
	return BASCI_COMPONENTS[ADVANCED_PROPERTIES[key]];
};
const toInt=(value)=>{
  if(value){
    return parseInt(value)
  } else {
    return 1
  }
}
</script>
<style lang="scss" scoped>
</style>
