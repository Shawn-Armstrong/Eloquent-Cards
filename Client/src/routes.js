import HomeView from './views/HomeView.vue';
import AboutUs from './views/AboutView.vue';
import GenerateCard from './views/GenerateCard.vue';

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
    path: '/generate',
    component: GenerateCard,
  },
];
