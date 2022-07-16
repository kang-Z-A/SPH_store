import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api"
import {getUUID} from '@/utils/uuid_token'

const state={
    goodinfo:{},
    uuid_token:getUUID(),
}
const mutations={
    GETGOODINFO(state,goodinfo){
        state.goodinfo=goodinfo;
    }
}
const actions={
    //获取产品信息
    async getGoodInfo({commit},skuId){
        let result=await reqGoodsInfo(skuId);
        if(result.code==200){
            commit("GETGOODINFO",result.data);
        }
    },
    //将产品添加到购物车中
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result=await reqAddOrUpdateShopCart(skuId,skuNum);
        if(result.code==200){
            return "ok";
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters={
    categoryView(state){
        return state.goodinfo.categoryView||{};
    },
    skuInfo(state){
        return state.goodinfo.skuInfo||{};
    },
    spuSaleAttrList(state){
        return state.goodinfo.spuSaleAttrList||[];
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}