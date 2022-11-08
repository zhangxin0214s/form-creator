<style>
td, th {
   border: none!important;
   text-align:left;
   background-color:white
}
table th:nth-of-type(1) {
    width: 30%;
}

table th:nth-of-type(2) {
    width: 60%;
}
table th:nth-of-type(3) {
    width:10%
}
</style>
# 在线代码编辑器

当你在用一款表单编辑器开发业务时，遇到一些特殊复杂的业务逻辑无法处理时，你是否还在苦苦挠头(头发少的真正原因)。为了解决这种场景，我们引入了在线代码编辑器Monaco(vscode同款内核)，支持用户在组件预留的各个钩子上进行diy coding,来处理这些特殊复杂的业务逻辑，并且我们还提供了fc这个强大(很多的方法)的命名空间，让你简单coding几行代码，就能处理掉复杂的业务逻辑。

## fc命名空间
在这个代码编辑器上编写的代码，都会在这个命名空间下运行，在这个命名空间下为用户暴露了一些常用方法及变量。

### 变量
| 属性名      | 说明                            | 其他               |
| ----     | ------------------------------ | ----------------- |
| target   | 当前组件对象                     |  -|
| widgetStore   | 脚手架中定义的pinia store对象 | -|
| props   | 由父组件传递的数据 | -|
| linkTarget   | 联动设置关联的数据 | -|

### 方法

| 方法      | 说明                            | 其他               |
| ----     | ------------------------------ | ----------------- |
| ElMessage   | 引入组件库中的ElMessage组件                     |  -|
| utils   | 提供的一些常用方法 | -|

## 详细方法&参数

### fc.utils

| 方法      | 说明                            | 其他               |
| ----     | ------------------------------ | ----------------- |
| getWidgetById   | 根据id查找组件，返回值类型为object   |  -|
| getWidgetsByKey   | 根据自定义的参数key查找组件，返回值类型为Array | -|
| getParentById   | 根据id查找父组件，返回值类型为object | -|