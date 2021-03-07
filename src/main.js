import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import AboutPage from './components/pages/AboutPage.vue';
import MainPage from './components/pages/MainPage.vue';
import ContactsPage from './components/pages/ContactsPage.vue';
import BlogPage from './components/pages/BlogPage.vue';
import LearnMorePage from './components/pages/LearnMorePage.vue';
import DonatePage from './components/pages/DonatePage.vue';
import DonateItemPage from './components/pages/DonateItemPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/about', component: AboutPage },
    { path: '/', component: MainPage },
    { path: '/contacts', component: ContactsPage },
    { path: '/blog', component: BlogPage },
    { path: '/learn-more', component: LearnMorePage },
    { path: '/donate', component: DonatePage },
    { path: '/donate/:itemId', component: DonateItemPage },
  ],
  linkActiveClass: 'nav-active',
  linkExactActiveClass: 'nav-exact-active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
