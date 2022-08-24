import {defineStore} from 'pinia';

export const historyStore = defineStore('history', {
  state: () => {
    return {
      historyList: [],
      pointer: 0,
      max: 100
    }
  },
  actions: {
    // 添加组件
    ADD_COMPONENT (command, id, options) {
      console.log('调用 ADD_COMPONENT, 指令参数为', id, options);
      // this.record({command,id, options} )
    },

    // 复制组件
    // 删除组件
    // 修改组件属性

    // 记录用户操作数据
    record ({command=null, id, options}) {
      if (!command) return;
      this.ADD_COMPONENT(command, id, options);
      this.historyList.splice(this.pointer+1, this.historyList.length);
      this.historyList.push({action: command, id, options});
      this.pointer++;
      if (this.historyList.length > this.max) {
        this.historyList.shift();
        this.pointer--;
      }
      console.log(this.historyList);
    },

    // 撤销
    undo () {
      this.pointer--;
      
    },

    // 反撤销
    redo () {
      this.pointer++;
    }
  },
  getters: {}
})
