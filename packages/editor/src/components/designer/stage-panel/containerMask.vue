<template>
    <div 
        class="container-mask">
        <component
            :is="widget.type"
            :key="widget.id"
            :widget="widget"
            :parent-widget="widgetList"
            :prop-key="porpKey"
            :rule-form="ruleForm"
            :selected-widget="selectedWidget"
            :is-editor="isEditor"
            @click.stop="select1(widget)">

            <template v-slot:widgetChild="scope">
                <draggable :list="scope.colWidget.widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
                    tag="transition-group" :component-data="{name: 'fade'}"
                    @add="onEnd1">
                    <template #item="{ element}">
                        <div class="transition-group-el">
                            <template v-if="element.category === 'widget'">
                                <widget-mask
                                    :widget="element"
                                    :widget-list="scope.colWidget.widgetList"
                                    :selected-widget="selectedWidget"
                                    :is-editor="isEditor"
                                    :form-config="formConfig"
                                    :parent="widget"
                                    :prop-key="scope.porpKey"
                                    :rule-form="scope.ruleForm"
                                />
                            </template>

                            <template v-if="element.category === 'container'">
                                <container-mask
                                    :widget="element"
                                    :widgetList="scope.colWidget.widgetList"
                                    :selectedWidget="selectedWidget"
                                    :isEditor="isEditor"
                                    :formConfig="formConfig"
                                    :parent="widget"
                                    :prop-key="scope.porpKey"
                                    :rule-form="scope.ruleForm"
                                />
                            </template>

                        </div>
                    </template>
                    
                </draggable>
            </template>
        </component>

        <!-- 操作项 -->
        <div
            class="container-mask-action"
            v-if="selectedWidget?.id === widget?.id && isEditor">
            <svg-icon
                icon-class="copy"
                class="copyIcon"
                @click.stop="copyWidget1({widget, parentWidget: widgetList})"
            />
            <svg-icon
                icon-class="delete"
                class="deleteIcon"
                @click.stop="removeWidget1({widget, parentWidget: widgetList, ruleForm: formConfig.ruleForm })"
            />
        </div>
    </div>
</template>
<script setup>
    import { inject } from 'vue'
    import widgetMask from "./widgetMask.vue"
    const props = defineProps([
        'widget',
        'selectedWidget',
        'formConfig',
        'widgetList',
        'isEditor',
        'porpKey',
        'ruleForm'
    ]);
    
    /**
     * End
     */
    const end = inject('onEnd');
    const onEnd1 = () =>{
        end()
    }

    /**
     * 复制
     */
    const copy = inject('copyWidget');
    const copyWidget1 = ({widget, parentWidget}) =>{
        copy({widget, parentWidget})
    }

    /**
     * 移除
     */
    const remove = inject('removeWidget')
    const removeWidget1 = ({widget, parentWidget, ruleForm }) =>{
        remove({widget, parentWidget, ruleForm })
    }

    /**
     * 选择
     */
    const select = inject('selected')
    const select1 = (widget) =>{
        select(widget)
    }
</script>
<style lang="scss" scoped>
// 选中样式
.select {
	border: 1px solid $--color-primary;
}

// 遮罩样式
.container-mask {
	position: relative;
	margin-bottom: 2px;
	&-action {
		position: absolute;
		bottom: 0;
		right: -2px;
		height: 23px;
		line-height: 28px;
		background: $--color-primary;
		z-index: 999;
	}
}
.copyIcon:hover,.deleteIcon:hover {
	cursor: pointer;
}
</style>