import axios from 'axios';
export default class Request {
    public static async get(url: string, isHdyServer: boolean = false) {
        try {
            let res = await axios.get(url);
            if (isHdyServer) {
                return { success: true, values: res.data };
            }
            return res.data;
        } catch (err) {
            return { success: false, message: err.message };
        }
    }
    public static async post(url: string, params: any, isHwServer: boolean = false, isJson: boolean = false) {
        try {
            let headers = { 'Content-Type': "multipart/form-data;" };
            // if (isJson) headers = { 'Content-Type': "application/json;charset=UTF-8" };
            Object.assign(headers);
            let res = await axios.post(url, params,{headers:headers});
            if (isHwServer) {
                return { success: true, values: res.data };
            }
            return res.data;
        } catch (err) {
            return { success: false, message: err.message };
        }
    
    }
}