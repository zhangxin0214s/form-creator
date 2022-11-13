const _widgetStore = fc.widgetStore();
let user_name = fc.utils.getWidgetsByKey('name', _widgetStore.widgetList)[0];
let user_email = fc.utils.getWidgetsByKey('email', _widgetStore.widgetList)[0]; 

fc.request['user/account']({
    methodType: 1,
    workcode: fc.target.value
}).then(res =>{
    if(res.code === 200){
        user_name.value = res.data.name;
        user_email = res.data.email;
    }
})