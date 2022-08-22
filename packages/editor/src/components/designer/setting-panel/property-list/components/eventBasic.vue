<template>
    <el-form
		label-position="left"
		label-width="100px"
		:model="eventsProp"
		style="max-width: 360px"
	> 
		<el-form-item
			v-if="eventsProp[key1]?.label"
			:label="`${eventsProp[key1]?.label}:`"
		>
			<svg-icon class="icon" icon-class="code-edit" @click="handleCode"/>
		</el-form-item> 

		<!-- 代码编辑器面板 -->
		<el-dialog  v-model="dialogCodeVisible" title="代码编辑器" destroy-on-close draggable>
			<code-editor
				:formData = eventsProp[key1].value
			></code-editor>
		</el-dialog>
	</el-form>
</template>
<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
import codeEditor from '../../../code-editor/index.vue'
defineProps(['eventsProp', 'key1']);
const dialogCodeVisible = ref(false);

const handleCode = () =>{
	dialogCodeVisible.value= true;
}
</script>
<style lang="scss" scoped>
	.icon{
		width:25px;
		height:25px;
		margin-left:-20px;
	}
	.icon:hover {
		cursor:pointer;
	}
	.el-dialog{
        width:1200px;
    }
</style>