import Vue from 'vue'
import Vuex from 'vuex'
import { generateId, deepClone } from '../../utils/util'

//使用vuex
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token:'',
        isCreate:true, // 是否是初次编辑
        mainJson: {}, 
        resourceJson: {},
        formConfig: {},
        widgetList: [], // 舞台组件列表
        selectedWidget: null, // 当前选中组件
        cloneWidget: null, // 克隆的组件
        isEditor: true
    },
    actions: {
        /**
         * 复制组件
         * @param {*} target
         */
        copyWidget({target,parentWidget,parentWidgetCid}) {
            let newOrigin = deepClone(target);
            newOrigin.id = generateId();
            // 处理栅格 && 标签页内组件
            if (['fcGrid','fcTabs','fcCard'].indexOf(newOrigin.type) > -1) {
                const cols = newOrigin.options.advanced.cols;
                cols.forEach(col => {
                    col.widgetList.forEach(widget => {
                        if (widget) {
                            widget.id = generateId();
                        }
                    })
                })
            }
            if(['fcGrid','fcTabs','fcCard'].indexOf(parentWidget.type)>-1){
                parentWidget.options.advanced.cols[parentWidgetCid].widgetList.push(newOrigin);
                return newOrigin;
            }else {
                console.warn('父容器检测到不是容器组件')
            }
        },
        /**
         * 删除组件
         * @param {*} target
         */
        removeWidget({currentWidget, parentWidget, parentWidgetCid}) {
            if (!parentWidget) return;
            if(['fcGrid','fcTabs','fcCard'].indexOf(parentWidget.type)>-1){
                parentWidget.options.advanced.cols[parentWidgetCid].widgetList.forEach((widget, index) => {
                    if (widget.id === currentWidget.id) {
                        parentWidget.options.advanced.cols[parentWidgetCid].widgetList.splice(index, 1)
                    }
                })
            }
            if(parentWidget instanceof Array) {
                parentWidget.forEach((widget, index) => {
                    if (widget.id === currentWidget.id) {
                        parentWidget.splice(index, 1)
                    }
                })
            }
            this.selectedWidget = null
        },

        /**
         * 表单提交
         * @param {*} formName 
         */
        submitForm(context,form) {
            form.validate((valid) => {
                if (valid) {
                  alert('submit!');
                } else {
                  console.log('error submit!!');
                  return false;
                }
            });
        },

        /**
         * 表单重置
         * @param {*} formName 
         */
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
});
  
export default store;
