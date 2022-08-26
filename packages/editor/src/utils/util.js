import { v4 as uuidv4 } from 'uuid';
/**
 * 生成唯一ID
 */
export function generateId(){
    return uuidv4().replaceAll('-','')
}

/**
 * 对象深克隆
 * @param {*} obj
 * @returns
 */
export function deepClone(obj){
    let result;
    if(typeof obj === 'object') {
        if(Array.isArray(obj)) {
        result = [];
        for(let i in obj) {
            result.push(deepClone(obj[i]))
        }
        } else if (obj === null){
        result = null
        } else if (obj.constructor === RegExp){
        result = obj
        } else {
        result = {};
        for(let i in obj) {
            result[i] = deepClone(obj[i])
        }
        }
    } else {
        result = obj;
    }
    return result;

}
