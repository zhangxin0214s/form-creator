<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
	>
		<div class="phone-content">
			<el-select
				v-model="widget.options.basic.prefix.value"
				:disabled="widget.options.basic.disabled.value"
				class="prefix-select"
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
          font-size: 13px;
        ">{{ item.value }}</span>
				</el-option>
			</el-select>
			<el-input
				oninput="value=value.replace(/[^\d]/g,'')"
				maxLength="11"
				:disabled="widget.options.basic.disabled.value"
				:placeholder="widget.options.basic.defaultValue.value"
			/>
		</div>
	</widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue';
defineProps(['widget', 'parentWidget']);
</script>
<style scoped>
.phone-content {
	width: 100%;
	display: flex;
}
.prefix-select {
	margin-right: 10px;
}
</style>