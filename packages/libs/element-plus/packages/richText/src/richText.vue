<template>
  <el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey"
        :style="`
			margin-left:${widget.options.basic.marginAdjustment?.options[0].value}px;
			margin-top:${widget.options.basic.marginAdjustment?.options[1].value}px;
			margin-right:${widget.options.basic.marginAdjustment?.options[2].value}px;
			margin-bottom:${widget.options.basic.marginAdjustment?.options[3].value}px
		`"
        >
    <div class="local-quill-editor">
      <!-- <QuillEditor theme="snow" :options="editorOption"/> -->
    </div>
  </el-form-item>
</template>
<script>
export default {
	name: 'fcRichText'
}
</script>
<script setup name="richText">
  const props = defineProps(['widget', 'isEditor', 'selectedWidget','widgetType','ruleForm', 'propKey','parent', 'parentWidget']);
</script>
  
  <style lang="scss" scoped>
  .local-quill-editor {
      .ql-snow {
          .ql-picker.ql-size {
              .ql-picker-label[data-value="12px"]::before,
              .ql-picker-item[data-value="12px"]::before {
                  content: '12px';
              }
              .ql-picker-label[data-value="14px"]::before,
              .ql-picker-item[data-value="14px"]::before {
                  content: '14px';
              }
              .ql-picker-label[data-value="16px"]::before,
              .ql-picker-item[data-value="16px"]::before {
                  content: '16px';
              }
              .ql-picker-label[data-value="18px"]::before,
              .ql-picker-item[data-value="18px"]::before {
                  content: '18px';
              }
              .ql-picker-label[data-value="20px"]::before,
              .ql-picker-item[data-value="20px"]::before {
                  content: '20px';
              }
              .ql-picker-label[data-value="24px"]::before,
              .ql-picker-item[data-value="24px"]::before {
                  content: '24px';
              }
              .ql-picker-label[data-value="28px"]::before,
              .ql-picker-item[data-value="28px"]::before {
                  content: '28px';
              }
              .ql-picker-label[data-value="32px"]::before,
              .ql-picker-item[data-value="32px"]::before {
                  content: '32px';
              }
              .ql-picker-label[data-value="36px"]::before,
              .ql-picker-item[data-value="36px"]::before {
                  content: '36px';
              }
          }
          .ql-picker.ql-header {
              .ql-picker-label::before,
              .ql-picker-item::before {
                  content: '文本';
              }
              .ql-picker-label[data-value="1"]::before,
              .ql-picker-item[data-value="1"]::before {
                  content: '标题1';
              }
              .ql-picker-label[data-value="2"]::before,
              .ql-picker-item[data-value="2"]::before {
                  content: '标题2';
              }
              .ql-picker-label[data-value="3"]::before,
              .ql-picker-item[data-value="3"]::before {
                  content: '标题3';
              }
              .ql-picker-label[data-value="4"]::before,
              .ql-picker-item[data-value="4"]::before {
                  content: '标题4';
              }
              .ql-picker-label[data-value="5"]::before,
              .ql-picker-item[data-value="5"]::before {
                  content: '标题5';
              }
              .ql-picker-label[data-value="6"]::before,
              .ql-picker-item[data-value="6"]::before {
                  content: '标题6';
              }
          }
          .ql-picker.ql-font{
              .ql-picker-label[data-value="SimSun"]::before,
              .ql-picker-item[data-value="SimSun"]::before {
                  content: "宋体";
                  font-family: "SimSun" !important;
              }
              .ql-picker-label[data-value="SimHei"]::before,
              .ql-picker-item[data-value="SimHei"]::before {
                  content: "黑体";
                  font-family: "SimHei";
              }
              .ql-picker-label[data-value="Microsoft-YaHei"]::before,
              .ql-picker-item[data-value="Microsoft-YaHei"]::before {
                  content: "微软雅黑";
                  font-family: "Microsoft YaHei";
              }
              .ql-picker-label[data-value="KaiTi"]::before,
              .ql-picker-item[data-value="KaiTi"]::before {
                  content: "楷体";
                  font-family: "KaiTi" !important;
              }
              .ql-picker-label[data-value="FangSong"]::before,
              .ql-picker-item[data-value="FangSong"]::before {
                  content: "仿宋";
                  font-family: "FangSong";
              }
          }
      }
      .ql-align-center{
        text-align: center;
      }
      .ql-align-right{
        text-align: right;
      }
      .ql-align-left{
        text-align: left;
      }
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
  