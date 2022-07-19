import HomeView from './views/HomeView.vue';
import AboutUs from './views/AboutView.vue';
import Form from './views/FormView.vue';
export default [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutUs,
  },
  {
    path: '/forms',
    component: Form,
  },
];
