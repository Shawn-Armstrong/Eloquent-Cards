<template>
  <div class="home">
    <h1>This is Home</h1>
    <h2> Place About section here and or templates</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/cards.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
