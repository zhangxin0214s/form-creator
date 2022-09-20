<template>
    <div class="grid">
        <el-row
			class="grid-container"
			:class="[
				selectedWidget?.id === widget?.id && isEditor?'select':'',
			]"
			:style="
		`background-color:${widget.options.basic.rowBackground.value}`
		"
		>
			<template
				v-for="(colWidget, colIdx) in widget.options.advanced.cols"
				:key="colIdx"
			>
				<Col
					:colWidget="colWidget"
					:widget="widget"
					:prop-key="propKey"
					:rule-form-ref="ruleFormRef"
					:is-editor="isEditor"
					:selected-widget="selectedWidget"
					:rule-form="ruleForm[widget.ruleFormKey] || ruleForm"
					:rule-form-key-type="widget.ruleFormKeyType"
					:style="`height:${widget.options.basic.colHeight.value}px;`"
				>
					<slot 
					 name="widgetChild"
					 v-bind="{
							colWidget, 
							propKey,
							ruleForm: ruleForm[widget.ruleFormKey] || ruleForm,
							index:colIdx
						}">
					</slot>
				</Col>
			</template>
		</el-row>
    </div>
</template>