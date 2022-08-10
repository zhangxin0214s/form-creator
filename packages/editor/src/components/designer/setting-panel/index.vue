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
              <component 
                :is="componentMap[selectedWidget?.type]" 
                :key="selectedWidget?.id"
                :selected-widget = "selectedWidget"
                :basic-prop = "selectedWidget?.options.basic"
              >
              </component>
            </div> 
          </el-main>
        </el-container>
      </div>
    </el-scrollbar>
</template>
<script setup>
import * as widget from './property-list/widget/index'
import { widgetStore } from '@/store/index'
import { storeToRefs } from 'pinia'
import { ref } from "vue"
const _widgetStore = widgetStore()
const { selectedWidget } = storeToRefs(_widgetStore)

const componentMap = {
  ...widget
}

</script>
<style lang="scss" scoped>
.el-header{
    --el-header-padding: 0 0px;
  }
  .el-main{
    --el-main-padding: 0 0px;
  }
  .setting{
    &-header{
      width:100%;
      height:50px;
      line-height:50px;
      text-align: center;
      border-bottom:1px solid #000;
      &-title{
        font-weight: bold;
      }
    }
    &-main{
      padding:15px;
    }
  }
</style>