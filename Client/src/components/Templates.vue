<template>
  <div class="templates">
    <h1 class="subheading">Choose a Template</h1>

    <v-container class="card-templates">
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          v-for="template in templates"
          :key="template.name"
        >
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-img :src="template.src"></v-img>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ template.name }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="blue" @click="Choice(template.theme)">Choose</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Theme1 from "../assets/Card-theme-1-Back.jpg";
import Theme2 from "../assets/Card theme-2-Back.jpg";
import Theme3 from "../assets/card theme 3-Back2.jpg";

export default {
  name: "Templates",
  data() {
    return {
      templates: [
        { name: "Template 1", src: Theme1, theme: "1" },
        { name: "Template 2", src: Theme2, theme: "2" },
        { name: "Template 3", src: Theme3, theme: "3" },
      ],
    };
  },
  methods: {
    Choice(theme) {
      this.$emit("choosetemplate", true);
      this.$emit("templatetype", theme);
    },
  },
};
</script>