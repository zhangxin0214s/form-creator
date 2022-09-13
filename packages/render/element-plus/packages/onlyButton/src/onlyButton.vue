<template>
  <el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey">
    <el-radio-group
        :size="widget.options.basic.radioSize.value"
        v-model="widget.value"
    >
      <el-radio-button
          v-for="(item,index) in widget.options.advanced.optionItems"
          :key="index"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
      >
        {{ item.label }}
      </el-radio-button>
    </el-radio-group>
  </el-form-item>
</template>
<script setup name="onlyButton">
const props = defineProps(['widget', 'isEditor', 'selectedWidget','widgetType','ruleForm', 'propKey','parent', 'parentWidget']);
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
  