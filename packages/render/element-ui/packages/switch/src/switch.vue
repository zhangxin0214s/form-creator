<template>
    <div class="switch">
      <el-form-item
        :label="widget.options.basic.label.value"
        :rules="widget.rules"
        :prop="propKey"
        :key="propKey">
        <el-switch
          v-model="widget.value"
          :disabled="widget.options.basic.disabled.value"
          @change="handleChangeEvent(_props)"
        />
      </el-form-item>
    </div>
  </template>
  
  <script>
  import mixins from '../../mixins/index.js'
  export default {
    name: "fcSwitch",
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
  