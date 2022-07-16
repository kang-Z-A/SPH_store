import requests from "./request";
import mockRequests from "./mockAjax";

// 三级联动接口
// 接口地址：/api/product/getBaseCategoryList   get     无参数


export const reqCategaryList=()=>requests({url:'product/getBaseCategoryList',method:'get'});
//轮播图接口
export const reqGetBannerList=()=>mockRequests.get('/banner');
//floor接口
export const reqFloorList=()=>mockRequests.get('/floor')

//搜索模块数据----post方式      参数：需要
export const reqGetSearchInfo=(params)=>requests({
    url:'/list',
    method:'post',
    data:params,
})

//详情页面
export const reqGoodsInfo=(skuId)=>requests({url:`/item/${skuId}`,method:'get'})

//将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

//获取购物车列表数据
export const reqCartList=()=>requests({url:'/cart/cartList',method:'get'})

export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

export const reqUserRegister=(data)=>requests({url:'/user/passport/register',data,method:'post'})

export const reqUserLogin=(data)=>requests({url:'/user/passport/login',data,method:'post'})

export const reqUserInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})

export const reqLogout=()=>requests({url:'/user/passport/logout',method:'get'})

export const reqAddressInfo=()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

export const reqOrderInfo=()=>requests({url:'/order/auth/trade',method:'get'})

export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

export const reqPayInfo=(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

export const reqPayStatus=(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})