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
		meta: {
			backgroundDark: true,
		},
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

const publicRoutes = ['/login']

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, _, next) => {
	if (publicRoutes.includes(to.fullPath)) {
		return next()
	}

	if (!localStorage.getItem('jwt')) {
		return next({ name: 'Login' })
	}

	return next()
})

router.beforeResolve(to => {
	const bodyTag = document.querySelector('body') as HTMLBodyElement
	bodyTag.style.backgroundColor = to.meta.backgroundDark ? '#17141a' : '#fff'
})

export default router
