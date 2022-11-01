<template>
    <div id="app">
        <fc-renderer
            :widgetList="widgetList"
            :formConfig="formConfig"
        ></fc-renderer>
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
