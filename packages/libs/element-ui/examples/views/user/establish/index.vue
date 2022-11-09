<template>
   <div>
      <fc-renderer
        :widgetStore="widgetStore"
        :widgetList="widgetList"
        :formConfig="formConfig"
    ></fc-renderer>
   </div>
</template>
<script>
import formJson from './index.json';
import store from '@/store';
export default {
  name: "App",
  data() {
      return {
        widgetStore: store,
        widgetList: formJson.widgetList,
        formConfig: formJson.formConfig
      }
  },
  mounted(){
    
  }
};
</script>