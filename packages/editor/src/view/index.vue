/**
* author: zhangxin0214
* email: zhangxin0214@tal.com
* date: 2022.08.01
*/
<template>
  <el-container class="main-container full-height">
    <el-header class="main-header">
      <div class="float-left main-title">
        <img :src="logo" @click="openHome" alt="logo">
        <span class="bold">题目编辑器</span>
      </div>
    </el-header>
    <el-container>
      <el-aside class="side-panel">
        <widget-panel :designer="designer"/>
      </el-aside>
      <el-container class="center-layout-container">
        <stage-panel :designer="designer"/>
      </el-container>
      <el-aside>
        <setting-panel :designer="designer"/>
      </el-aside>
    </el-container>
  </el-container>
</template>
<script setup>
import WidgetPanel from '@/components/designer/widget-panel/index.vue'
import StagePanel from '@/components/designer/stage-panel/index.vue'
import SettingPanel from '@/components/designer/setting-panel/index.vue'
import { ref } from "vue"

const designer = ref('null');
const logo = ref('../src/assets/logo.svg');
</script>
<style lang="scss" scoped>

.el-container.main-container {
  background: #fff;

  :deep(aside) { /* 防止aside样式被外部样式覆盖！！ */
    margin: 0;
    padding: 0;
    background: inherit;
  }
}

.el-container.full-height {
  height: 100%;
  overflow-y: hidden;
}

.el-container.center-layout-container {
  min-width: 680px;
  border-left: 2px dotted #EBEEF5;
  border-right: 2px dotted #EBEEF5;
}

.el-header.main-header {
  border-bottom: 2px dotted #EBEEF5;
  height: 48px !important;
  line-height: 48px !important;
  min-width: 800px;
}

div.main-title {
  font-size: 18px;
  color: #242424;
  display: flex;
  align-items: center;
  justify-items: center;

  img {
    cursor: pointer;
    width: 36px;
    height: 36px;
  }

  span.bold {
    font-size: 20px;
    font-weight: bold;
    margin: 0 6px 0 6px;
  }

  span.version-span {
    font-size: 14px;
    color: #101F1C;
    margin-left: 6px;
  }
}

.float-left {
  float: left;
}

.float-right {
  float: right;
}

.el-dropdown-link {
  margin-right: 12px;
  cursor: pointer;
}

div.external-link {
  display: flex;
  align-items: center;

  a {
    font-size: 13px;
    text-decoration: none;
    margin-right: 10px;
    color: #606266;
  }
}

.el-header.toolbar-header {
  font-size: 14px;
  border-bottom: 1px dotted #CCCCCC;
  height: 42px !important;
  //line-height: 42px !important;
}

.el-aside.side-panel {
  width: 260px !important;
  overflow-y: hidden;
}

.el-main.form-widget-main {
  padding: 0;

  position: relative;
  overflow-x: hidden;
}

.container-scroll-bar {
  :deep(.el-scrollbar__wrap), :deep(.el-scrollbar__view) {
    overflow-x: hidden;
  }
}
</style>
