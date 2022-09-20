<template>
	<el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey">
		<el-upload
			v-model:file-list="widget.options.basic.maxUpLoadNumber.upLoadList"
			class="upload-demo"
			:action="widget.options.basic.url.value"
			:multiple="widget.options.basic.multiple.value"
			:limit="widget.options.basic.maxUpLoadNumber.value"
			:list-type="widget.options.basic.fileListType.value"
			:on-preview="handlePictureCardPreview"
			:drag="widget.options.basic.drag.value"
      :disabled="widget.options.basic.disabled.value"
		>
			<div v-if="widget.options.basic.drag.value">
				<svg-icon icon-class="upload" 
        style="font-size:3rem"/>
				<div v-if="widget.options.basic.fileListType.value!=='picture-card'">
					请拖拽文件到此处，或者 
          <el-link
						type="primary"
						:underline="false"
					>请点击此处上传</el-link>
				</div>
			</div>
			<div v-else>
				{{widget.options.basic.upLoadBtnText.value}}
			</div>
			<el-dialog v-model="dialogVisible">
				<img
					style="width:100%"
					:src="dialogImageUrl"
					alt="Preview Image"
				/>
			</el-dialog>
		</el-upload>
	</el-form-item>
</template>
<script>
export default {
	name: 'fcUpload'
}
</script>
<script setup name="upload">
import { ref } from 'vue';

const props = defineProps(['widget', 'isEditor', 'selectedWidget','widgetType','ruleForm', 'propKey','parent', 'parentWidget']);
const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const handlePictureCardPreview = (uploadFile) => {
	dialogImageUrl.value = uploadFile.url;
	dialogVisible.value = true;
};
</script>
<style lang="scss" scoped>
.hint {
	font-size: 12px;
	color: #9b9b9b;
}
// 选中样式
.select {
	outline: 1px solid $--color-primary;
}

</style>
