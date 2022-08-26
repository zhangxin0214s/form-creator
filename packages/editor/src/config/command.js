// TODO: 由于方案不同，该文件暂时搁置
// 添加组件
export const ADD_COMPONENT = (command, id, options) => {
  console.log('调用 ADD_COMPONENT, 指令参数为', id, options);
  // undo delete component
  // redo add component
}
// 删除组件
export const DELETE_COMPONENT = (command, id, options) => {
  console.log('调用 DELETE_COMPONENT, 指令参数为', id, options);
  // undo add component
  // redo delete component
}
// 复制组件
export const COPY_COMPONENT = (command, id, options) => {
  console.log('调用 COPY_COMPONENT, 指令参数为', id, options);
  // undo delete component
  // redo add component
}
// 修改组件属性
export const UPDATE_COMPONENT_PROP = (command, id, options) => {
  console.log('调用 UPDATE_COMPONENT_PROP, 指令参数为', id, options);
  // undo pointer-- options history
  // redo pointer++ options history
}
