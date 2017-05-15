// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)// 引入顺序不能改

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: '/static/loading.gif'
})


Vue.config.productionTip = false

import { Swipe, SwipeItem } from 'vue-swipe';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

//引入css文件
require("./assets/css/app.css")
import './assets/js/jquery-3.2.0'
import {fn} from './assets/js/carousel'

new Vue({
	el: '#app',
	router : router,
	template: '<App/>',
	components: { App }
})