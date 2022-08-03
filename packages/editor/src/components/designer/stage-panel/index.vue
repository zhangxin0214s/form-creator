/**
 * author: zhangxin0214
 * email: zhangxin0214@tal.com
 * date: 2022.08.01
 */
<template>
    <div class="stage-container">
        <div class="stage-hint">
            请从左侧选择一个组件，拖拽或双击添加至此处
        </div>
        <div class="stage-form">
          
        </div>
    </div>
</template>
<script>
export default {
  name: "StagePanel",
  data(){
    return {
        
    }
  }
}
</script>
<style lang="scss" scoped>
.stage{
  &-container{
    width: 100%;
    height: 100%;
    padding: 10px;
    background: #f1f2f3;
    overflow-x: hidden;
    overflow-y: auto;
  }
  &-hint{
    text-align: center;
    color: #444;
    margin-top:40%;
  }
}
</style>