<template>
    <div class="container-mask">
        <component
            :is="widget.type"
            :key="widget.id"
            :widget="widget"
            :parent-widget="widgetList"
            :rule-form-ref="ruleFormRef"
            :prop-key="propKey"
            :parent="parent"
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
                                    :rule-form-ref="ruleFormRef"
                                    :parent="widget"
                                    :prop-key="getPropKey({parent: widget,element, propKey: scope.propKey, index: scope.index})"
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
                                    :rule-form-ref="ruleFormRef"
                                    :parent="widget"
                                    :prop-key="getPropKey({parent: widget,element, propKey: scope.propKey, index: scope.index})"
                                    :rule-form="scope.ruleForm"
                                />
                            </template>

                        </div>
                    </template>

                </draggable>
            </template>
        </component>

        <!-- ????????? -->
        <div
            class="container-mask-production"
            v-if="widget.options.basic.isHidden.value && isEditor">
            <svg-icon icon-class="hidden" class="hiddenIcon" />
        </div>
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
                @click.stop="removeWidget1({widget, parentWidget: widgetList, parent, ruleForm })"
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
        'propKey',
        'ruleForm',
        'parent',
        'ruleFormRef'
    ]);

    const getPropKey = ({parent,element,propKey,index}) =>{
        if(propKey) {
            if(parent.ruleFormKeyType === 'object'){
                return `${propKey}.${element.ruleFormKey}`
            }
            if(parent.ruleFormKeyType === 'array'){
                return `${propKey}.${index}.${element.ruleFormKey}`
            }
        }else{
            return `${element.ruleFormKey}`
        }
    }
    /**
     * End
     */
    const end = inject('onEnd');
    const onEnd1 = () =>{
        end()
    }

    /**
     * ??????
     */
    const copy = inject('copyWidget');
    const copyWidget1 = ({widget, parentWidget}) =>{
        copy({widget, parentWidget})
    }

    /**
     * ??????
     */
    const remove = inject('removeWidget')
    const removeWidget1 = ({widget, parentWidget, parent,ruleForm }) =>{
        remove({widget, parentWidget,parent, ruleForm })
    }

    /**
     * ??????
     */
    const select = inject('selected')
    const select1 = (widget) =>{
        select(widget)
    }
</script>
<style lang="scss" scoped>
// ????????????
.select {
	border: 1px solid $--color-primary;
}

// ????????????
.container-mask {
	position: relative;
	margin-bottom: 2px;
  &-production {
    position: absolute;
		top: 0;
    left: 0;
		height: 23px;
    line-height: 28px;
		background: $--color-primary;
		z-index: 999;
  }
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
