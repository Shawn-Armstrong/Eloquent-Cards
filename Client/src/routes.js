import HomeView from './views/HomeView.vue';
import AboutUs from './views/AboutView.vue';

export default [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutUs,
  },
];
