<template>
  <div class="input">
    <el-form-item
      :label="widget.options.basic.label.value"
      :rules="widget.rules"
      :prop="propKey"
      :key="propKey">
      <el-input
      :disabled="widget.options.basic.disabled.value"
      :placeholder="widget.options.basic.defaultValue.value"
      :type="widget.options.basic.inputType.value"
      v-model="widget.value"
      show-word-limit
      @change="handleChangeEvent(_props)"/>
      <div class="hint">{{ widget.options.basic.hint.value }}</div>
    </el-form-item>
  </div>
</template>
<script>
  import mixins from '../../mixins/index.js'
  export default {
    name: "fcInput",
    mixins:[mixins],
    props: {
      widget: Object,
      isEditor: Boolean,
      propKey: String
    }
  };
  </script>
  
  <style scoped>
  .hint {
    font-size: 12px;
    color: #9b9b9b;
}

  </style>
