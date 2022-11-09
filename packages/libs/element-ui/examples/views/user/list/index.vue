<template>
  <div>
     <fc-renderer
       :widgetStore="widgetStore"
       :request="request1"
       :widgetList="widgetList"
       :formConfig="formConfig"
   ></fc-renderer>
  </div>
</template>
<script>
import formJson from './index.json';
import * as request from '@/api';
import store from '@/store';
export default {
 name: "App",
 data() {
     return {
       widgetStore: store,
       request1: request,
       widgetList: formJson.widgetList,
       formConfig: formJson.formConfig
     }
 }
};
</script>