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
 export default {
   name: "App",
   data() {
       return {
         widgetStore: null,
         widgetList: formJson.widgetList,
         formConfig: formJson.formConfig
       }
   }
 };
 </script>