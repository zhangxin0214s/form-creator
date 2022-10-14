<template> 
  <el-tabs 
    type="border-card"
    v-model="active" 
    :addable="widget.addable"
    :closable="widget.closable"  
    @tab-add="addTabsHandler" 
    @tab-remove="removeTabsHandler1($event)">
    <el-tab-pane :label="colWidget.name" :name="colWidget.id" v-for="(colWidget, colIdx) in widget.options.advanced.cols" :key="colWidget.id">
        <tabs-col 
            :colWidget="colWidget"
            :rule-form="ruleForm[widget.ruleFormKey] || [{}]"
            :widget="widget"
            :prop-key="propKey"
            :colIdx="colIdx"
            :is-editor="isEditor">
            <slot 
            name="widgetChild"
            v-bind="{
                colWidget: colWidget, 
                propKey,
                ruleForm: ruleForm[widget.ruleFormKey] && ruleForm[widget.ruleFormKey][colIdx],
                index:colIdx
            }">
            </slot>
        </tabs-col>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import { Message } from "element-ui"
import TabsCol from './tabsCol.vue'
export default {
    name: "fcTabs",
    data() {
        return {
            active: '1'
        }
    },
    props: {
        widget: Object,
        isEditor: Boolean,
        propKey: String,
        ruleForm: Object,
        ruleFormRef: Object
    },
    components: {
        TabsCol
    },
    methods: {
        guid(){
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        addTabsHandler(){
            let maxCount=this.widget.maxCount;
            if(maxCount<=0 || this.widget.options.advanced.cols.length<maxCount){
                const ruleFormKey = this.widget.ruleFormKey;
                if(!ruleFormKey){
                    Message({
                                    message: '请先设置参数key',
                                    type: 'error',
                                    duration:1500
                            })
                    return
                }
                this.widget.options.advanced.cols.push({
                    id: this.guid(),
                    name: "名称1",
                    widgetList: []
                })
                ruleFormKey && this.ruleForm[ruleFormKey].push({})
      }
        },
        removeTabsHandler1(name){
            const ruleFormKey = this.widget.options.basic.ruleFormKey.value;
            let cols=this.widget.options.advanced.cols
            if(cols.length===1){
                return 
            }
            for(let i=0;i<cols.length;i++){
                if(cols[i].id===name){
                    cols.splice(i,1)
                    this.ruleForm[ruleFormKey]?.splice(i,1)
                    return 
                }
            }
        }
    }
};
</script>