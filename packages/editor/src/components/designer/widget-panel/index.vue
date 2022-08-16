/**
* author: zhangxin0214
* email: zhangxin0214@tal.com
* date: 2022.08.01
*/
<template>
  <el-scrollbar class="side-scroll-bar">
    <div class="widget-layout">
      <el-container>
        <el-header>
          <div class="widget-header">
            <svg-icon icon-class="component-lib"/>
            <span class="widget-header-title">组件库</span>
          </div>
        </el-header>

        <el-main>
          <el-collapse v-model="activeNames" class="widget-collapse">

            <!-- 容器 -->
            <el-collapse-item name="1" title="容器">
              <draggable
                  tag="ul"
                  :list="state.containers"
                  :group="{name: 'dragGroup', pull: 'clone', put: false}"
                  class="list-group"
                  sort="false"
                  item-key="key"
				  :clone="onClone"
              >
                <template #item="{ element }">
                  <li class="gild-container">
                    <span><svg-icon :icon-class="element.icon" style="margin-right: 20px"/>{{ element.name }}</span>
                  </li>
                </template>
              </draggable>
            </el-collapse-item>

            <!-- 基础组件 -->
            <el-collapse-item name="2" title="基础组件">
              <draggable
                  tag="ul"
                  :list="state.basicWidgets"
                  ghost-class="ghost"
                  :sort="false"
                  item-key="key"
                  :group="{name: 'dragGroup', pull: 'clone', put: false}"
				  :clone="onClone"
              >
                <template #item="{ element }">
                  <li class="gild-container">
                    <span><svg-icon :icon-class="element.icon" style="margin-right: 20px"/>{{ element.name }}</span>
                  </li>
                </template>
              </draggable>
            </el-collapse-item>

            <!-- 高级组件 -->
            <el-collapse-item name="3" title="高级组件">
              <draggable
                  tag="ul"
                  :list="state.advancedWidgets"
                  ghost-class="ghost"
                  :sort="false"
                  item-key="key"
                  :group="{name: 'dragGroup', pull: 'clone', put: false}"
				  :clone="onClone"
				  @end="onDragEnd"
              >
                <template #item="{ element }">
                  <li class="gild-container">
                    <span><svg-icon :icon-class="element.icon" style="margin-right: 20px"/>{{ element.name }}</span>
                  </li>
                </template>
              </draggable>
            </el-collapse-item>
          </el-collapse>
        </el-main>
      </el-container>
    </div>
  </el-scrollbar>
</template>
<script setup>
import { containers, basicWidgets, advancedWidgets } from './widgetsConfig';
import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import { generateId,deepClone } from '@/utils/util'
const _widgetStore = widgetStore();
const { widgetList,cloneWidget } = storeToRefs(_widgetStore);
const activeNames = ref(['1', '2', '3', '4']);
const state = reactive({
	containers: containers,
	basicWidgets: basicWidgets,
	advancedWidgets: advancedWidgets,
});

/**
 * 克隆
 */
const onClone = (origin) =>{
	let newOrigin = deepClone(origin);
	newOrigin.id = generateId();
	_widgetStore.cloneWidget = newOrigin;
	return newOrigin
}

const onDragEnd = () =>{
	console.log("结束")
}
</script>
<style lang="scss" scoped>
@import '../../../styles/global.scss';

.el-header {
	--el-header-padding: 0 0px;
}

.el-main {
	--el-main-padding: 0 0px;
}

.widget {
	&-header {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border-bottom: 1px solid #000;

		&-title {
			font-weight: bold;
		}
	}
}

.widget-collapse {
	border-top-width: 0;

	:deep(.el-collapse-item__header) {
		margin-left: 8px;
		font-style: italic;
		font-weight: bold;
	}

	:deep(.el-collapse-item__content) {
		padding-bottom: 6px;

		ul {
			padding-left: 10px; /* 重置IE11默认样式 */
			margin: 0; /* 重置IE11默认样式 */
			margin-block-start: 0;
			margin-block-end: 0.25em;
			padding-inline-start: 10px;

			&:after {
				content: '';
				display: block;
				clear: both;
			}

			.container-widget-item,
			.field-widget-item {
				display: inline-block;
				height: 28px;
				line-height: 28px;
				width: 115px;
				float: left;
				margin: 2px 6px 6px 0;
				cursor: move;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				background: #f1f2f3;
			}

			.container-widget-item:hover,
			.field-widget-item:hover {
				background: #ebeef5;
				outline: 1px solid $--color-primary;
			}

			.drag-handler {
				position: absolute;
				top: 0;
				left: 160px;
				background-color: #dddddd;
				border-radius: 5px;
				padding-right: 5px;
				font-size: 11px;
				color: #666666;
			}
		}
	}
}

.gild-container {
	display: inline-block;
	height: 28px;
	line-height: 28px;
	width: 115px;
	float: left;
	margin: 2px 6px 6px 0;
	cursor: move;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	background: #f1f2f3;
}
</style>
