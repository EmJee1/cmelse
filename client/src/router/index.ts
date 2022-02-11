import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Styleguide from '../views/Styleguide.vue'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/styleguide',
		name: 'Styleguide',
		component: Styleguide,
	},
	{
		path: '/models/:model',
		component: Home,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
