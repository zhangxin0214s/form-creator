<template>
  <div class="from">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>模板缩略图</span>
        </div>
      </template>
      <div>
        <ul v-for="(item, index) in templateData">
          <li @click="clickRender">
            <span>{{ item.name }}</span>
            <img :src="item.image" style="width: 100px; height: 100px">
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import templateData from '../../../public/json/templateData.json'

const clickRender = () => {
  alert('我被点击了')
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
/deep/.el-card__body {
  padding: 0px 0px 0px 20px;
}
ul {
  float: left;
  height: 100px;
  width: 100px;
  margin-right: 30px;
  padding: 0px 0px 20px 0px;
}
li {
  display: inline-block;
  list-style: none;
  border: 1px solid red;
}
</style>
