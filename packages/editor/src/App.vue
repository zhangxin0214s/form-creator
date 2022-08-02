
<template>
  <div id="app">
    <SEditorDesigner />
  </div>
</template>
<script>
import SEditorDesigner from './components/designer/index.vue'
export default {
  name: 'App',
  components: {
    SEditorDesigner,
  }
}
</script>
<style lang="scss">
  #app {
    height: 100%;
  }
</style>