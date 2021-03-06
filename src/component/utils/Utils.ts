import { message } from 'antd';
import { Base64 } from 'js-base64';
export default class Utils {
    static sendSocketData(method: string, data: any = {}, callBack: Function, uuid: string) {
        if (window['systemWebSocket']) {
            window['systemWebSocket'].sendData(Object.assign(data, { method: method }), callBack, uuid);
        }
    }
    /** 转成base64 */
    public static toBase64(obj: any) {
        return Base64.toBase64(obj);
    }
    /** base64转回原对象 */
    public static fromBase64(obj) {
        return Base64.fromBase64(obj);
    }
    public static getUUID(len = 32) {
        let radix = 16;
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        let uuid: any = [];
        let i: any = 0;
        radix = radix || chars.length;
        if (len) {
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            var r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    };
    /** 数组删除对象 */
    public static listSplice(list: Array<any>, obj: any) {
        if (obj instanceof Function) {
            list.forEach((item, idx) => {
                if (item.toString() === obj.toString()) list.splice(idx, 1);
            });
        } else {
            let index = list.indexOf(obj);
            if (index >= 0)
                list.splice(index, 1);
        }
    }

    /** 显示信息 */
    public static showMsg(text: string, type: string = 'info') {
        message[type](text);
    }
    public static equals(obj1, obj2) {
        if (obj1 === undefined) return false;
        let keys = Object.keys(obj2);
        for (let i = 0; i < keys.length; i++) {
            if (obj1[keys[i]] !== obj2[keys[i]]) return false;
        }
        return true;
    }
    /** 根据数据生成提交的Form表单 */
    public static recordToForm(record: {}) {
        let formData = new FormData();
        Object.keys(record).map((key) => {
            let values = record[key] instanceof Object ? JSON.stringify(record[key]) : record[key];
            return formData.append(key, values);
        }, this);
        return formData;
    }
    /** 判断是否为空 */
    public static isEmpty(str: any) {
        return str === null || str === undefined || str === '';
    }
    /** 时间格式化 */
    public static dateFormat(date: any, format: string = 'yyyy-MM-dd hh:mm:ss') {
        let o = {
            "M+": date.getMonth() + 1,                 //月份   
            "d+": date.getDate(),                    //日   
            "h+": date.getHours(),                   //小时   
            "m+": date.getMinutes(),                 //分   
            "s+": date.getSeconds(),                 //秒   
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        };
        if (/(y+)/.test(format))
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return format;
    }
    /** 获取类名称 */
    public static getClassName(cls: string) {
        return cls.split('extends')[0].replace('class', '').trim();
    }
    public static eval(str: string) {
        let fn = Function;
        return new fn('return ' + str)();
    }
    public static compareJson(obj1: any, obj2: any) {
        if (!this.isJsonObj(obj1) || !this.isJsonObj(obj2)) return false;
        var _keys = Object.keys(obj1)
        if (_keys.length !== Object.keys(obj2).length) return false;
        let flag = false;
        for (var _key in obj1) {
            if (!obj2.hasOwnProperty(_key)) return false;
            var value1 = obj1[_key];
            var value2 = obj2[_key];
            if (this.isJsonObj(value1)) return this.compareJson(value1, value2);
            if (String(value1) !== String(value2)) return false;
            flag = true;
        }
        return flag;
    }
    public static isJsonObj(data: any) {
        return typeof (data) === "object" &&
            Object.prototype.toString.call(data).toLowerCase() === "[object object]"
            && !data.length;
    }
}