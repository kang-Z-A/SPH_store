import {reqCartList} from '@/api'
import {getUUID} from '@/utils/uuid_token'
const state={
    cartList:[],
    uuid_token:getUUID(),
}
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList=cartList;
    }
}
const actions={
    async getCarList({commit}){
        let result=await reqCartList();
        if(result.code==200){
            commit('GETCARTLIST',result.data)
        }
    },  
}
const getters={
    cartList(state){
        return state.cartList[0]||{}
    },
}

export default{
    state,
    mutations,
    actions,
    getters
}