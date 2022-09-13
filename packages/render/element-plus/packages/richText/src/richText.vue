<template>
  <el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey">
    <div class="local-quill-editor">
      <!-- <QuillEditor theme="snow" :options="editorOption"/> -->
    </div>
  </el-form-item>
</template>
<script setup name="richText">
  const props = defineProps(['widget', 'isEditor', 'selectedWidget','widgetType','ruleForm', 'propKey','parent', 'parentWidget']);
</script>
  <!-- <script>
   import {QuillEditor,Quill} from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css';
  
  // 设置字体大小
  const fontSize = ['12px', '14px', '16px', '20px', '24px', '36px']
  // Quill.imports['attributors/style/size']?.whitelist = fontSize
  Quill.register(Quill.imports['attributors/style/size'])
  
  // 设置字体样式
  const Font = Quill.import('attributors/style/font') // 引入这个后会把样式写在style上
  const fonts = [
    'SimSun',
    'SimHei',
    'Microsoft-YaHei',
    'KaiTi',
    'FangSong'
  ]
  Font.whitelist = fonts // 将字体加入到白名单
  Quill.register(Font, true)
  
    export default {
      components: {
        QuillEditor
      },
      data() {
        return {
          editorOption: {
            // 编辑器配置
            placeholder: '请在这里输入',
            modules: {
              toolbar: [
                // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
                ['bold', 'italic', 'underline', 'strike'],
                // 引用  代码块-----['blockquote', 'code-block']
                ['blockquote', 'code-block'],
                // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
                [{ header: 1 }, { header: 2 }],
                // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
                [{ list: 'ordered' }, { list: 'bullet' }],
                // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
                [{ script: 'sub' }, { script: 'super' }],
                // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
                [{ indent: '-1' }, { indent: '+1' }],
                // 文本方向-----[{'direction': 'rtl'}]
                [{ direction: 'rtl' }],
                // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
                [{ size: fontSize }],
                // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
                [{ color: [] }, { background: [] }],
                // 字体种类-----[{ font: [] }]
                [{ font: fonts }],
                // 对齐方式-----[{ align: [] }]
                [{ align: [] }],
                // 清除文本格式-----['clean']
                ['clean'],
                // 链接、图片、视频-----['link', 'image', 'video']
                ['image']
              ],
            },
          }
        }
      },
      created(){
      }
    }
  </script> -->
  
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
  