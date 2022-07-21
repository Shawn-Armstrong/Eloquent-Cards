<template>
  <div class="home" style="height: 1000px">
    <v-parallax dark height="1600" src="../assets/Home-Image.png">
      <v-overlay value="true" absolute>
        <v-row align-content="center" justify="center" no-gutters>
          <v-col class="text-center" cols="12">
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
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
