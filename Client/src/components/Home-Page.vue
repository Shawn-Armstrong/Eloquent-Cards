<template>
  <div class="home" style="height: 1000px">
    <v-parallax dark height="1600" src="../assets/Home-Image.png">
      <v-overlay value="true" absolute>
        <v-row align-content="center" justify="center" no-gutters>
          <v-col class="text-center" cols="12">
            <!--<v-img class="logo mx-auto" src="../assets/logoec.png"/>-->
            <h1 class="text-h3 font-weight-thin mb-6">Eloquent Cards</h1>
            <v-btn
              to="/generate"
              outlined
              x-large
              elevation="9"
              color="#bf2e2e"
            >
              Get Started
            </v-btn>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>
    <v-footer color="black" padless>
      <v-row justify="center" no-gutters>
        <v-col class="black lighten-2 py-2 text-right white--text" cols="12">
          <v-card-text class="py-2 pa-2 white--text text-center">
            {{ new Date().getFullYear() }} —
            <strong>Eloquent Cards Team </strong>
            <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              text
              class="my-2"
            >
              {{ link }}
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      links: ['About', 'Team', 'Contact Us'],
    };
  },
  methods: {
    Start() {
      this.$emit('choosepage', 2);
    },
  },
};
</script>

<style scoped>
.logo {
  height: 70px;
  width: 500px;
  align-items: center;
  margin-bottom: 30px;
}
</style>
