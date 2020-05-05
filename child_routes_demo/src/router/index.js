import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Settings from '../views/Settings.vue'
import SettingsEmail from '../components/SettingsEmail';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			name: 'Home',
			path: '/',
			component: Home
		},
		{
			name: 'Settings',
			path: '/settings',
			component: Settings,
			children: [
				{
					name: 'Email',
					path: 'email',
					component: SettingsEmail
				}
			]
		}
	]
})

export default router;