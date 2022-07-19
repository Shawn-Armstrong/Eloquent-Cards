<template>
<div class="home" style="height:1000px">
  <NavBar></NavBar>
    <v-parallax dark height="1600" src="../assets/Home-Image.png">
        <v-overlay value="true" absolute>
    
        <v-row
      align-content="center"
      justify="center"
      no-gutters
    >
      <v-col
        class="text-center"
        cols="12"
      >
      <!--<v-img class="logo mx-auto" src="../assets/logoec.png"/>-->
        <h1 class="text-h3 font-weight-thin mb-6">
          About Us
        </h1>
        <v-container>
          <p>
          Eloquent Cards is a software development project utilizing Agile methodologies made by five undergraduate students at the University of California, Santa Cruz. The project was made in conjunction with the University’s Software Engineering course within the Computer Science and Engineering department. The website enables businesses minded individuals to customize their own business card in a simplistic manner. 
        </p>
          
        </v-container>
        <v-row>
          <v-col v-for="item in items" :key="item.id" col="4">
            <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      
      :src="item.src"
    >
    </v-img>

    <v-card-text class="text--primary">
      <div class="title">{{item.name}}</div>

      <p>{{ item.title }}</p>
    </v-card-text>
  </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
        </v-overlay>
    </v-parallax>
    <v-footer
    color="black"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="black lighten-2 py-2 text-right white--text"
        cols="12"
      >
        <v-card-text class="py-2 pa-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Eloquent Cards Team </strong>
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
import NavBar from '@/components/Nav-Bar.vue';
export default {
  name: 'HomePage',
  components: {
    NavBar,
  },
  data() {
    return {
      links: [
        'About',
        'Team',
        'Contact Us',
      ],
      items: [
        {
          id:1,
          src: require('../assets/Shawn.jpeg'),
          name:"Sean",
          title: 'Product Owner',
        },
          {
          id:2,
          src: require('../assets/Steven.jpg'),
          name:"Steven",
          title: 'Team Member',
        },
        {
          id:3,
          src: require('../assets/Steven.jpg'),
          name:"Neha",
          title: 'Team Member',
        },
        {
          id:4,
          src: require('../assets/Jennifer.jpg'),
          name:"Jennifer",
          title: 'Team Member',
        },
        {
          id:5,
          src: require('../assets/Steven.jpg'),
          name:"Leo",
          title: 'Team Member',
        }
      ]
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