<template>
  <v-app-bar app color="black" dark hide-on-scroll>
    <div class="d-flex align-center">
      <v-img
        alt="eloquentcards logo"
        contain
        src="https://i.imgur.com/D2tCET9.png"
        transition="scale-transition"
        width="300"
      />
    </div>

    <v-spacer></v-spacer>
  <router-link
    to="/home"
    tag="button"
    >
    <v-btn 
    flat
    to="/about"
    text
    value="about"
    >
      <span class="mr-2">Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
  </router-link>
<router-link to="/templates">
  <v-btn
    flat
     href="/about"
    text
    value="about"
    >
      <span class="mr-2">The Developers</span>
      <v-icon>mdi-account-group</v-icon>
    </v-btn>

</router-link>
    
    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Create Card</span>
      <v-icon>mdi-credit-card-edit</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>
