import { reqGetSearchInfo } from "@/api";

const state={
    searchList:{},
};
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList;
    }
};
const actions={
    async getSearchList({commit},params={}){
        //params形参：当用户派发action时的第二个参数，至少是一个空对象
        let result=await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data);
        }
    }
};
//计算属性，简化数据
const getters={
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    }
};


//对外暴露小仓库
export default {
    state,
    mutations,
    actions,
    getters
}
