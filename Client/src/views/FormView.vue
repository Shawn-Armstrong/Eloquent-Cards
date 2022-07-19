<template>
  <div>
    <NavBar></NavBar>
    <HomePage></HomePage>
  </div>
</template>

<script>
import NavBar from '@/components/Nav-Bar.vue';
import HomePage from '@/components/Home-Page.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomePage,
  },
};
</script>