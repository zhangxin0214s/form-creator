<template>
	<el-form
		label-position="left"
		label-width="86px"
		:model="basicProp"
		style="max-width: 360px"
	>
		<el-form-item
			v-if="basicProp[key1]?.label"
			:label="`${basicProp[key1]?.label}:`"
		>
			<el-button-group class="ml-4">
				<el-button
					v-for="(item,index) in basicProp[key1].options"
					:key="index"
					type="primary"
					:icon="item.icon"
					@click="onClickButton(item)"
				/>
				<div v-show="isClick">
					<span>{{label}}</span>
					<el-input-number
						v-model="num"
						:min="-999"
						:max="999"
            @change="onChangeNumber"
					/>
				</div>
			</el-button-group>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps, ref } from 'vue';
import { Back, Top, Bottom, Right } from '@element-plus/icons-vue';
const props = defineProps(['basicProp', 'key1']);
let label = ref('');
let num = ref(0);
let isClick = ref(false);
let btnValue = null;
const onClickButton = (val) => {
  num.value = val.value;
  label.value = val.label;
  btnValue = val;
  isClick.value = true;
};
const onChangeNumber = (val)=>{
  btnValue.value = val;
}
</script>
<style lang="scss" scoped>
</style>
