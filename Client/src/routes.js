import HomePage from './components/Home-Page.vue';
import AboutUs from './views/AboutView.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutUs,
  },
];
