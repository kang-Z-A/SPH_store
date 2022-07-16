//可以将main.js立即为Vue页面的入口文件

import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'

//引入仓库
import store from './store';
//引入swiper样式
import 'swiper/css/swiper.css'

import * as API from '@/api'


import { Button, MessageBox } from 'element-ui';
Vue.component(Button.name, Button);

// //测试api
// import { reqCategaryList } from './api';
// reqCategaryList();

// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
Vue.component(TypeNav.name,TypeNav)
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)

//element-ui
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//引入mockServe.js----mock数据
import '@/mock/mockServe';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate(){
    Vue.prototype.$bus=this;
    Vue.prototype.$API=API;
  },
  // 注册路由，组件多出$route、$router属性
  router,
  //注册仓库,组件实例上会多一个$store属性
  store

}).$mount('#app')
