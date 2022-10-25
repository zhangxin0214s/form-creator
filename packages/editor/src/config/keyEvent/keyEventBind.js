import {getCommand} from './common.js';

const documentEventBind = () => {
  document.addEventListener('keydown', eventFun);
  document.addEventListener('keyup', eventFun);
}

const eventFun = (e) => {
  getCommand(e)
}

export {
  documentEventBind
}
