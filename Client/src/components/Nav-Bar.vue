<template>
  <v-app-bar app color="#201b1c" dark>
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

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">The Developers</span>
      <v-icon>mdi-account-group</v-icon>
    </v-btn>

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
