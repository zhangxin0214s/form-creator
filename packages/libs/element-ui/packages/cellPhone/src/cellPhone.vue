<template>
	<el-form-item
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey"
	>
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
import mixins from '../../mixins/index.js';
export default {
	name: 'fcCellPhone',
	mixins: [mixins],
};
</script>
  
  <style scoped>
.hint {
	font-size: 12px;
	color: #9b9b9b;
}
</style>
