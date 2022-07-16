// 对axios进行二次封装
import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";

const requests=axios.create({
    baseURL:'/api',
    timeout:5000,
});

//请求拦截
requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        config.headers.userTempId=store.state.detail.uuid_token;
    }
    if(store.state.user.token){
        config.headers.token=store.state.user.token
    }
    nProgress.start();
    return config;
});

//响应拦截
requests.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data;
},(err)=>{
    return Promise.reject(new Error('faile'));
});

export default requests;