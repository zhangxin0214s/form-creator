<template>
  <div class="from">
    <el-card class="box-card">
      <div v-for="(item, index) in templateData">
        <ul>
          <li>
            <img :src="item.image" style="width: 120px; height: 120px">
          </li>
          <div style="margin-top: 15px">{{ item.name }}</div>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import templateData from '../../../public/json/templateData.json'
import { storeToRefs } from 'pinia'
import { widgetStore } from '@/store/index';

const _widgetStore = widgetStore();
const {widgetList, formConfig} = storeToRefs(_widgetStore);

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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0px;
}
li {
  display: inline-block;
  margin-top: 10px;
  list-style: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
