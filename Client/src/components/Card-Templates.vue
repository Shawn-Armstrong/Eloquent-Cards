<template>
  <v-app>
    <div class="templates">
      <h1 class="subheading">Choose a Template</h1>
      <v-container class="card-templates">
        <v-layout row wrap justify-center>
          <v-flex
            xs12
            sm6
            md4
            lg3
            v-for="template in templates"
            :key="template.name"
          >
            <v-hover>
              <template v-slot="{ hover }">
                <v-card
                  class="text-xs-center ma-6"
                  :elevation="hover ? 15 : 6"
                  flat
                  style="background-color"
                  :src="template.src"
                >
                  <v-responsive class="pt-0">
                    <div class="flip-card-container">
                      <div class="flip-card">
                        <div class="flip-card-front">
                          <v-img :src="template.src"></v-img>
                        </div>
                        <div class="flip-card-back">
                          <v-img :src="template.src2"></v-img>
                        </div>
                      </div>
                    </div>
                  </v-responsive>
                  <v-card-text class="pb-0">
                    <div class="text--primary">
                      <h3>{{ template.name }}</h3>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-layout justify-center>
                      <v-btn
                        outlined
                        large
                        color="#bf2e2e"
                        elevation="5"
                        @click="Choice(template.theme)"
                      >
                        Choose</v-btn
                      >
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </template>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import Theme1 from '../assets/Card-theme-1-Back.jpg';
import Theme2 from '../assets/Card theme-2-Back.jpg';
import Theme3 from '../assets/card theme 3-Back2.jpg';
import Theme1F from '../assets/Card theme-1-Front.jpg';
import Theme2F from '../assets/Card theme-2-Front.jpg';
import Theme3F from '../assets/card theme 3-front2.jpg';

export default {
  name: 'CardTemplates',
  data() {
    return {
      templates: [
        { name: 'Template 1', src: Theme1, theme: '1', src2: Theme1F },
        { name: 'Template 2', src: Theme2, theme: '2', src2: Theme2F },
        { name: 'Template 3', src: Theme3, theme: '3', src2: Theme3F },
      ],
    };
  },
  methods: {
    Choice(theme) {
      this.$emit('templatetype', theme);
    },
  },
};
</script>

<style>
.flip-card-container {
  display: flex;
  width: 405px;
  height: 240px;
  perspective: 1000px;
}
.flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}
.flip-card-container:hover .flip-card {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

v-img {
  width: auto;
  height: auto;
}

.subheading {
  margin-top: 40px;
}

.card-templates {
  margin-top: 20px;
}
.butt {
  margin-top: 70px;
}
</style>
