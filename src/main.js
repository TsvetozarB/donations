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
import NotFoundPage from './components/pages/NotFoundPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/about', component: AboutPage },
    { path: '/contacts', component: ContactsPage },
    { path: '/blog', component: BlogPage },
    { path: '/learn-more', component: LearnMorePage },
    { path: '/donate', component: DonatePage },
    { path: '/donate/:itemId', component: DonateItemPage },
    { path: '/:notFound(.*)', component: NotFoundPage },
  ],
  linkActiveClass: 'nav-active',
  linkExactActiveClass: 'nav-exact-active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  },
});

const app = createApp(App);

app.use(router);

app.mount('#app');
