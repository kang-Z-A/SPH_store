// 对axios进行二次封装
import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

const mockRequests=axios.create({
    baseURL:'/mock',
    timeout:5000,
});

//请求拦截
mockRequests.interceptors.request.use((config)=>{
    nProgress.start();
    return config;
});

//响应拦截
mockRequests.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data;
},(err)=>{
    return Promise.reject(new Error('faile'));
});

export default mockRequests;
