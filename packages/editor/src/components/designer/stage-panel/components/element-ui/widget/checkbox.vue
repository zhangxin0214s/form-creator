<template>
  <div class="input-container">
    <el-checkbox-group>
      <el-checkbox>

      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
// import { basicWidgets } from "../../../../widget-panel/widgetsConfig"
// import { reactive } from "vue"
//
// const state = reactive({
//   basicWidgets:basicWidgets,
// })

export default {
  data() {
    return {
      checked:[]
    }
  }
}
</script>
<style lang="scss" scoped>
.input-container {
  .asterisk {
    color: red;
    margin-right: 5px;
  }

  .label {
    font-size: 14px;
  }
}
</style>
