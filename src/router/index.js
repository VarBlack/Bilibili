import Vue from 'vue'
import VueRouter from 'vue-router'//引入路由
Vue.use(VueRouter)//安装路由这个插件

// import Home from '@/components/home'

import Index from '@/components/child/index'

const router = new VueRouter({
	routes:[
		{
			path: '/',
			name: 'Index',
			component: Index
		}			
	]
})


export default router
