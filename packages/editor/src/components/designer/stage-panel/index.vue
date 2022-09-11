/**
* author: zhangxin0214
* email: zhangxin0214@tal.com
* date: 2022.08.01
*/
<template>
  <div class="stage-container">
    <div
        class="stage-hint"
        v-if="widgetList.length === 0"
    >
      请从左侧选择一个组件，拖拽添加至此处
    </div>
    <div class="stage-toolbar">
      <tool-bar/>
    </div>
    <div class="stage-form">
      <el-form
          class="widget-form"
          :label-width="formConfig['label-width'].value+'px'"
          :label-position="formConfig['label-position'].value"
          ref="ruleFormRef"
          :model="formConfig.ruleForm"
      >
        <draggable
            v-if="widgetList"
            :list="widgetList"
            item-key="id"
            v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300,}"
            tag="transition-group"
            @add="onEnd">
          <template #item="{ element: widget }">
            <div class="transition-group-el">
              <div class="container-mask">

                <!-- 非容器组件 -->
                <template v-if="widget.category === 'widget'">
                  <el-form-item
                    :class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
                    :label="basicProp.label.value"
                    :rules="widget.rules"
                    :prop="propKey"
                    :key="propKey">
                      <component
                        :is="widget.type"
                        :key="widget.id"
                        :widget="widget"
                        :parent-widget="widgetList"
                        :prop-key="widget.ruleFormKey"
                        :rule-form="formConfig.ruleForm"
                        :rule-form-key-type="widget.ruleFormKeyType"
                        :rule-form-ref="ruleFormRef"
                        :selected-widget="selectedWidget"
                        :is-editor="isEditor"
                        :hidden="!isEditor && widget.options.basic.isHidden.value"
                        @click.stop="selected(widget)">
                      </component>
                  </el-form-item>
                </template>
                
                <!-- 容器类组件 -->
                <template v-else>
                  <component
                      :is="widget.type"
                      :key="widget.id"
                      :widget="widget"
                      :parent-widget="widgetList"
                      :prop-key="widget.ruleFormKey"
                      :rule-form="formConfig.ruleForm"
                      :rule-form-key-type="widget.ruleFormKeyType"
                      :rule-form-ref="ruleFormRef"
                      :selected-widget="selectedWidget"
                      :is-editor="isEditor"
                      :hidden="!isEditor && widget.options.basic.isHidden.value"
                      @click.stop="selected(widget)">
                        <draggable :list="colWidget.widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
                          tag="transition-group" :component-data="{name: 'fade'}"
                          @add="onEnd1">
                          <template #item="{ element,index }">
                             <div class="transition-group-el">
                                <component
                                    :is= "element.type" 
                                    :key= "element.id"
                                    :widget = element
                                    :prop-key = "getPropKey(element,index)"
                                    :parent-widget= colWidget.widgetList
                                    :rule-form-ref= "ruleFormRef"
                                    :rule-form= "ruleForm"
                                    :parent = "widget"
                                    :selected-widget="selectedWidget"
                                    :is-editor="isEditor"
                                    :hidden="!isEditor && widget.options.basic.isHidden.value"
                                    @click.stop="selected1(element)">
                                </component>
                              </div>
                          </template>
                        </draggable>
                    </component>
                </template>

                <!-- 操作项 -->
                <div
                  class="container-mask-action"
                  v-if="selectedWidget?.id === widget?.id && isEditor">
                    <svg-icon
                      icon-class="copy"
                      class="copyIcon"
                      @click.stop="copy"
                    />
                    <svg-icon
                      icon-class="delete"
                      class="deleteIcon"
                      @click.stop="delete1"
                    />
                </div>
              </div>
            </div>
          </template>
        </draggable>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import toolBar from '../toolbar-panel/index.vue'
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import FormInstance from 'element-plus';
import { ref,provide } from 'vue'

const _widgetStore = widgetStore();
const {widgetList, formConfig, isEditor, selectedWidget} = storeToRefs(_widgetStore);

const ruleFormRef = ref(null);

/**
 * 点击选中
 */
const selected = (widgetData) => {
  console.log('选中:', widgetData);
  _widgetStore.selectedWidget = widgetData;
};
provide('selected', selected)

/**
 * 拖拽结束
 */
const onEnd = () => {
  _widgetStore.selectedWidget = _widgetStore.cloneWidget;
  _widgetStore.recordHistory();
}
provide('onEnd', onEnd)

/**
 * 复制组件
 */
const copyWidget = (widget) => {
  _widgetStore.copyWidget(widget);
}
provide('copyWidget', copyWidget)

/**
 * 删除组件
 */
const removeWidget = (widget, parentWidget) => {
  _widgetStore.removeWidget(widget, parentWidget);
}
provide('removeWidget', removeWidget)

/**
 * 提交
 */
const submitForm = async () => {
  if (!ruleFormRef) return
  await ruleFormRef.value.validate((valid, fields) => {
    console.log(valid, "===valid===")
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
provide('submitForm', submitForm)
</script>
<style lang="scss" scoped>
.stage {
  &-container {
    width: 100%;
    height: 100%;
    padding: 0 10px 0 10px;
    background: #f1f2f3;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  &-hint {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #444;
  }

  &-toolbar {
    height: 50px;
    background: #fff;
  }

  &-form {
    width: 100%;
    height: 90%;
    flex: 1;
    margin-top: 10px;
    background: #fff;
  }

  &-button {
    position: absolute;
    right: 10px;
    bottom: 0;
    display: flex;

    > .el-button {
      width: 100px;
      height: 40px;
      margin-bottom: 10px;
    }
  }
}

.widget-form {
  overflow-x: hidden;
  overflow-y: scroll;
  height: calc(100vh - 170px);
}

/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}
</style>
