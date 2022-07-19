<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
// import UserForm from './components/User-Form.vue';
// import CardTemplates from './components/Card-Templates.vue';
import axios from 'axios';
// import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed';
// import NavBar from './components/Nav-Bar.vue';
// import HomePage from './components/Home-Page.vue';

export default {
  name: 'App',

  components: {
    // UserForm,
    // CardTemplates,
    // VuePdfEmbed,
    // NavBar,
    // HomePage,
  },
  data() {
    return {
      pageChosen: 1, //1: home page, 2: template page, 3: form page
      cardInfo: {
        personalInfo: {
          name: '',
          companyName: '',
          email: '',
          phoneNumber: '',
          address: '',
          website: '',
          title: '',
        },
        templateInfo: {
          number: '',
        },
      },
      source1:
        'https://raw.githubusercontent.com/Shawn-Armstrong/Machine-Learning-Coursera/cf08f5f48285fbc7099a1de36c83a6f471cf21ed/BigTheta.pdf',
    };
  },
  methods: {
    choosepage(variable) {
      this.pageChosen = variable;
    },
    submit(personalInfo) {
      console.log('parent submit function');
      this.cardInfo.personalInfo = personalInfo;
      console.log(this.cardInfo);

      axios({
        url: 'http://localhost:5000/api/download_card',
        method: 'POST',
        responseType: 'blob',
        data: {
          cardInfo: this.cardInfo,
        },
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'file.pdf');
        document.body.appendChild(fileLink);

        fileLink.click();
      });
    },
    submit_preview(personalInfo) {
      this.cardInfo.personalInfo = personalInfo;
      console.log('Submitting preview request...');

      axios({
        url: 'http://localhost:5000/api/preview_card',
        method: 'POST',
        responseType: 'json',
        data: {
          cardInfo: this.cardInfo,
        },
      }).then((response) => {
        this.source1 = 'data:application/pdf;base64,' + response.data.pdfData;
        console.log(this.source1);
      });
    },
    templatenum(templateInfo) {
      this.cardInfo.templateInfo = templateInfo;
      console.log(this.cardInfo.templateInfo);
    },
  },
};
</script>

<style>
.pdfpane {
  margin-left: 100px;
  width: 1000px;
  margin-right: 100px;
}

.menu {
  margin-right: 100px;
  margin-left: 100px;
}
</style>

<!-- <style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
