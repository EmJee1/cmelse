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
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/styleguide',
		name: 'Styleguide',
		component: Styleguide,
	},
]

const publicRoutes = ['/login']

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from) => {
	if (publicRoutes.includes(to.fullPath)) return true
	else if (!localStorage.getItem('jwt')) return '/login'
})

export default router
