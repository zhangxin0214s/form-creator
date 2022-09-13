<template>
    <div class="container-mask">
        <component
            :is="widget.type"
            :key="widget.id"
            :widget="widget"
            :parent-widget="widgetList"
            :prop-key="propKey"
            :rule-form="ruleForm"
            :parent="parent"
            :selected-widget="selectedWidget"
            :is-editor="isEditor"
            @click.stop="select1(widget)">
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
                @click.stop="removeWidget1({widget, parentWidget: widgetList, ruleForm })"
            />
        </div>
    </div>
</template>
<script setup>
    import { inject } from 'vue'
    const props = defineProps([
        'widget',
        'parent',
        'selectedWidget',
        'formConfig',
        'widgetList',
        'isEditor',
        'ruleForm',
        'propKey'
    ]);

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