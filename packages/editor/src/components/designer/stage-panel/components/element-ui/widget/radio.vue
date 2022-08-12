<template>
  <el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio>
</template>

<script>
export default {
  name:"radio",
  data() {
    return {
      radio:'1'
    }
  }
}
</script>

<style scoped>

</style>
