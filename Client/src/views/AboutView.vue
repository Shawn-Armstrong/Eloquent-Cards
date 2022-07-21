<template>
  <div class="home" style="height: 1000px">
    <NavBar></NavBar>
    <v-parallax dark height="1600" src="../assets/Home-Image.png">
      <v-overlay value="true" absolute>
        <v-row align-content="center" justify="center" no-gutters>
          <v-col class="text-center" cols="12">
            <h1 class="text-h1 color-#d53953 font-weight-thin mb-6">
              About Us
            </h1>
            <v-container
              id="test10"
              fluid
              style=" mt-10 mb-14 justify-center padding: 0px; width: 80%"
            >
              <v-sheet id="menu" class="pa-6 rounded-xl">
                <h2>
                  Eloquent Cards is a software development project utilizing
                  Agile methodologies made by five undergraduate students at the
                  University of California, Santa Cruz. The project was made in
                  conjunction with the University’s Software Engineering course
                  within the Computer Science and Engineering department. The
                  website enables businesses minded individuals to customize
                  their own business card in a simplistic manner.
                </h2>
              </v-sheet>
            </v-container>
            <v-row class="justify-center">
              <v-col v-for="item in items" :key="item.id" col="4">
                <v-card class="mx-auto" max-width="400">
                  <v-img
                    max-width="400"
                    max-height="400"
                    class="white--text align-end"
                    :src="item.src"
                  >
                  </v-img>

                  <v-card-text class="text--primary">
                    <div class="title">{{ item.name }}</div>

                    <p>{{ item.title }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import NavBar from '@/components/Nav-Bar.vue';
import FooterBar from '@/components/Footer-Bar.vue';

export default {
  name: 'HomePage',
  components: {
    NavBar,
    FooterBar,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          src: require('../assets/Shawn.jpeg'),
          name: 'Shawn',
          title: 'Team Member',
        },

        {
          id: 2,
          src: require('../assets/Steven.jpg'),
          name: 'Steven',
          title: 'Team Member',
        },

        {
          id: 3,
          src: require('../assets/Neha.png'),
          name: 'Neha',
          title: 'Team Member',
        },

        {
          id: 4,
          src: require('../assets/Jennifer2.jpg'),
          name: 'Jennifer',
          title: 'Team Member',
        },

        {
          id: 5,
          src: require('../assets/Leo.jpg'),
          name: 'Leo',
          title: 'Team Member',
        },
      ],
    };
  },
};
</script>
