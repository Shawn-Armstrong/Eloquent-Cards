<template>
  <v-app-bar app color="black" class="px-5" dark hide-on-scroll>
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

    <v-btn to="/" text>
      <span class="mr-2">Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/about" text>
      <span class="mr-2">The Developers</span>
      <v-icon>mdi-account-group</v-icon>
    </v-btn>

    <v-btn to="/generate" text>
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
