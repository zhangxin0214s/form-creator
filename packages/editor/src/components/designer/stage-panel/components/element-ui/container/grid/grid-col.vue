<template>
    <el-col 
        :span="colWidget.gutter" 
        class="grid-content1 ep-bg-purple" 
        :class="[isEditor?'gird-line':'']"
        >
            <draggable :list="colWidget.widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
                tag="transition-group" :component-data="{name: 'fade'}"
                @end="onEnd"
                :sort="isEditor">
                <template #item="{ element }">
                    <div class="transition-group-el">
                        {{ `${propKey}.${element.options.basic.ruleFormKey.value}` }}
                        <component 
                            :is="componentMap[element.type]" 
                            :key="element.id"
                            :widget = element
                            :propKey = "`${propKey}.${element.options.basic.ruleFormKey.value}`"
                            :parent-widget=colWidget.widgetList
                            :rule-form-ref="ruleFormRef"
                            :parent = widget
                            @submitForm="submitForm">
                        </component>
                    </div>
                </template>
            </draggable>
            
    </el-col>
</template>
<script setup>
    import eleComponents from '../../index.js';
    import { widgetStore } from '@/store/index';
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue'

    const props = defineProps([
        'colWidget',
        'widget',
        'propKey',
        'ruleFormRef'
    ])
    const componentMap = {
        ...eleComponents
    }
    const _widgetStore = widgetStore();
    const { selectedWidget,widgetList,isEditor} = storeToRefs(_widgetStore);
    const selected = (widgetData) => {
        console.log('选中:', widgetData);
        _widgetStore.selectedWidget = widgetData;
    };
    const onEnd = () =>{
        console.log("结束")
    }

    const submitForm = async () =>{
        if (!props.ruleFormRef) return
        await props.ruleFormRef.validate((valid, fields) => {
            console.log(valid,"===valid===")
            if (valid) {
            console.log('submit!')
            } else {
            console.log('error submit!', fields)
            }
        })
    }
</script>
 <style lang="scss" scoped>
    .grid-content1{
        border-radius: 4px;
        min-height: 36px;
    }
    .gird-line{
        border:1px dashed #000;
    }
 </style>