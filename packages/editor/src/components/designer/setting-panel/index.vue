/**
 * author: zhangxin0214
 * email: zhangxin0214@tal.com
 * date: 2022.08.01
 */
 <template>
	<el-scrollbar class="side-scroll-bar">
		<div class="setting-layout">
			<el-container>
				<el-header>
					<div class="setting-header">
						<svg-icon icon-class="set-up" />
						<span class="setting-header-title">组件设置</span>
					</div>
				</el-header>
				<el-main>
					<div class="setting-main">
						{{ selectedWidget?.options.events1 }}
						<component
							:is="componentMap[selectedWidget?.type]"
							:key="selectedWidget?.id"
							:selected-widget="selectedWidget"
							:basic-prop="selectedWidget?.options.basic"
							:advanced-prop="selectedWidget?.options.advanced"
							:events-prop="selectedWidget?.options.events"
						>
						</component>
					</div>
				</el-main>
				<div class="setting-footer">
					<form-base/>
				</div>
			</el-container>
		</div>
	</el-scrollbar>


</template>
<script setup>
import formBase from './property-list/components/formBasic.vue';
import * as widget from './property-list/widget/index';
import * as container from './property-list/container/index';
import { widgetStore } from '@/store/index';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const _widgetStore = widgetStore();
const { selectedWidget ,dialogCodeVisible} = storeToRefs(_widgetStore);
const componentMap = {
	...widget,
	...container,
};
</script>
<style lang="scss" scoped>
.el-header {
	--el-header-padding: 0 0px;
}
.el-main {
	--el-main-padding: 0 0px;
	overflow: auto;
	height: calc( 100vh - 170px);
}
.setting {
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
	&-main {
		padding: 15px;
    height: 100%;
	}
	&-footer {
		width: 100%;
		position: absolute;
		bottom: 20px;
		text-align: center;
	}
}
</style>
