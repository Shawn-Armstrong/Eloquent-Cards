<template>
  <div>
    <NavBar></NavBar>
    <HomePage></HomePage>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import NavBar from '@/components/Nav-Bar.vue';
import HomePage from '@/components/Home-Page.vue';
import FooterBar from '@/components/Footer-Bar.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomePage,
    FooterBar,
  },
};
</script>
