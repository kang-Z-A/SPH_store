import { reqCategaryList, reqGetBannerList, reqFloorList } from "@/api";

const state = {
    //三级菜单数据
    categoryList: [],
    //轮播图数据
    bannerList: [],

    floorList:[],
};
const mutations = {
    CATEGORYLIST(state, categorylist) {
        state.categoryList = categorylist;
    },
    GETBANNERLIST(state, bannerlist) {
        state.bannerList = bannerlist;
    },
    GETFLOORLIST(state,floorlist){
        state.floorList=floorlist;
    }
};
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategaryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    //轮播图
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },
    //floor数据
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data);
        }
    }
};

const getters = {};


//对外暴露小仓库
export default {
    state,
    mutations,
    actions,
    getters
}




