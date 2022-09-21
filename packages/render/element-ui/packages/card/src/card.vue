<template>
    <el-card type="border-card">
        <template #header>
            <div class="card-header">
            <span>{{ widget.title }}</span>
            </div>
        </template>
        <card-col 
            :widgetList="widget.options.advanced.widgetList"
            :prop-key="propKey"
            :widget="widget"
            :rule-form="ruleForm[widget.ruleFormKey] || ruleForm"
            :is-editor="isEditor">
            <slot 
            name="widgetChild"
            v-bind="{
                colWidget:widget.options.advanced, 
                propKey,
                ruleForm: ruleForm[widget.ruleFormKey] || ruleForm,
                index:null
            }">
            </slot>
        </card-col>
    </el-card>
</template>
<script>
import CardCol from './cardCol.vue'
export default {
    name: 'fcCard',
    components: {
        CardCol
    },
    props: {
        widget: Object,
        isEditor: Boolean,
        propKey: String,
        ruleForm: Object,
        ruleFormRef: Object
    }
}
</script>