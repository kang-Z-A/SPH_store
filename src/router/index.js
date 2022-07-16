// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
import store from '@/store'

// 使用插件
Vue.use(VueRouter);

// 把VueRouter原型对象的push方法保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push与replace方法
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}

// 配置路由
let router= new VueRouter({
    routes,
    scrollBehavior() {
        //滚动行为这个函数,需要有返回值,返回值为一个对象。
        //经常可以设置滚动条x|y位置 [x|y数值的设置一般最小是零]
        return { y: 0 };
    }
})

//全局守卫：前置守卫
router.beforeEach(async (to,from,next)=>{
    let token=store.state.user.token;
    let name=store.state.user.userInfo.name;
    if(token){
        //用户已经登录了还想去登录页
        if(to.path=='/login')
            next('/');
        else{
            if(name){
                next()
            }else{
                try{
                    await store.dispatch('getUserInfo')
                    next()
                }catch(error){
                    //token失效，清除token，返回登录页
                    await store.dispatch('userLogout');
                    next('/login')
                }
            }
        }

    }else{
        next()
    }
})

export default router;