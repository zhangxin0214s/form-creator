<template>
   <div>
      <fc-renderer
        :widget-store="widgetStore"
        :request="request"
        :widget-list="widgetList"
        :form-config="formConfig"
    ></fc-renderer>
   </div>
</template>
<script>
import formJson from './index.json';
import store from '@/store';
import request from '@/api';
export default {
  name: "App",
  data() {
      return {
        widgetStore: store,
        request: request,
        widgetList: formJson.widgetList,
        formConfig: formJson.formConfig
      }
  },
  mounted(){
   
  }
};
</script>