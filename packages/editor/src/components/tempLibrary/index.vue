<template>
  <div class="from">
    <el-card class="box-card" shadow="never">
      <div v-for="(item, index) in templateData">
        <ul>
          <li>
            <img :src="item.image" style="width: 160px; height: 120px" @click="insert(item)">
          </li>
          <div style="margin-top: 15px">{{ item.name }}</div>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import templateData from '../../../public/templateLib/list.json'
import { storeToRefs } from 'pinia'
import { widgetStore } from '@/store/index';
import axios from 'axios'
import { defineProps, defineEmits } from 'vue'

// 通过 emit 方法监听父组件的自定义事件
const emit = defineEmits(['library'])
const _widgetStore = widgetStore();
const {widgetList, formConfig} = storeToRefs(_widgetStore);
const insert = (item) => {
  axios.get(item.path).then(res => {
    _widgetStore.widgetList.push(...res.data.widgetList)
    _widgetStore.formConfig = res.data.formConfig
    //关闭遮罩 event 自定义事件名  args 需要传的值
    emit('library', false)
  })
  _widgetStore.clearWidget();
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-card {
  width: 100%;
}
/deep/ .el-card__body {
  padding: 0px 0px 0px 30px;
}
ul {
  float: left;
  height: 190px;
  width: 170px;
  margin-right: 30px;
  border: 1px solid #d8dce5;
  padding: 0px;
  text-align: center;
}
li {
  display: inline-block;
  margin-top: 15px;
  list-style: none;
  border: 1px solid #d8dce5;
}
</style>
