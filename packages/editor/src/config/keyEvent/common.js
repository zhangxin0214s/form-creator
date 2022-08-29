import keyMap from './keyMapExplain.json';
import { widgetStore } from '@/store/index';

let keyList = [];
const getCommand = ( e) => {
  if (keyList.length===2) keyList.pop();
  keyList.push(e.key);
  let key = [...keyList].join('').toLowerCase(),
      message = keyMap.list.find(every => every.key.join('').toLowerCase() === key);
  message && widgetStore()[message.command]()
}

export {
  getCommand,
}
