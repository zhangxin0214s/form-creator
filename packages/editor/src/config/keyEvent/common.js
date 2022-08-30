import keyMap from './keyMapExplain.json';
import { widgetStore } from '@/store/index';

let keyList = [];
const getCommand = (e) => {
  if (e.type === 'keyup') {
    if (keyList.length>0 && keyList[0] === e.key) {
      keyList.length=0;
      return;
    }
  }
  keyList.push(e.key);
  let key = `${keyList[0]}${keyList[keyList.length-1]}`.toLowerCase(),
      message = keyMap.list.find(every => every.key.join('').toLowerCase() === key);
  message && widgetStore()[message.command]()
}

export {
  getCommand,
}
