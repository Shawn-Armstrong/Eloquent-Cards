<template>
  <v-footer app bottom padless color="black">
    <v-row justify="center" no-gutters>
      <v-col class="black lighten-2 py-2 text-right white--text" cols="12">
        <v-card-text class="py-2 pa-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>Eloquent Cards Team </strong>
          <v-btn to="/about" class="ml-5"> About </v-btn>
          <v-btn
            href="https://github.com/Shawn-Armstrong/Eloquent-Cards"
            class="ml-5"
          >
            GitHub
          </v-btn>
        </v-card-text>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterBar',
};
</script>
