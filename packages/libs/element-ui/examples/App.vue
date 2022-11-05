<template>
    <div id="app">
      <router-view />
    </div>
</template>
<script>
import formJson from './test.json';
console.log(formJson,"===formJson===");
export default {
  name: "App",
  data() {
      return {
        widgetList: formJson.widgetList,
        formConfig: formJson.formConfig
      }
  }
};
</script>

<style>

</style>
