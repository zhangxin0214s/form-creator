<template>
	<el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey">
		<div class="phone-content">
			<el-select
				v-model="widget.options.basic.prefix.value"
				:disabled="widget.options.basic.disabled.value"
				class="prefix-select"
				@change="setRules()"
			>
				<template v-slot:prefix>
					<span>+</span>
				</template>
				<el-option
					v-for="item in widget.options.basic.prefix.options"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				>
					<span style="float: left">{{ item.label }}</span>
					<span style="
          float: right;
          color: var(--el-text-color-secondary);
          font-size: 13px;">{{ item.valueText }}</span>
				</el-option>
			</el-select>
			<el-input
				oninput="value=value.replace(/[^\d]/g,'')"
				maxLength="11"
				:disabled="widget.options.basic.disabled.value"
				:placeholder="widget.options.basic.defaultValue.value"
				v-model="widget.value"
				@change="handleChangeEvent(props,ElMessage)"
			/>
		</div>
	</el-form-item>
</template>
<script>
    export default {
      name: 'fcCellPhone'
    }
  </script>
<script setup>
import { watch } from 'vue';
import { ElMessage } from 'element-plus'
import { handleChangeEvent } from '../../hooks/handleChangeEvent';
import { watchEvent } from '../../hooks/watchEvent';
import useRegisterEvent from '../../hooks/useRegisterEvent';
import { inject } from 'vue'
const props = defineProps([
	'widget',
	'widgetType',
	'ruleForm',
	'propKey',
	'parent',
	'parentWidget',
	'isEditor',
	'selectedWidget',
]);

watchEvent(props, watch,ElMessage,"cellPhone");

const { linkageWatchEvent } = useRegisterEvent({props, inject});
linkageWatchEvent({watch});
</script>
<style lang="scss" scoped>
.phone-content {
	width: 100%;
	display: flex;
}
.prefix-select {
	margin-right: 10px;
}
.hint {
	font-size: 12px;
	color: #9b9b9b;
}
// 选中样式
.select {
	outline: 1px solid $--color-primary;
}
</style>
