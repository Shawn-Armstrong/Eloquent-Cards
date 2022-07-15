<template>
  <v-app>
    <CardTemplates
      v-on:choosetemplate="choosetemplate"
      v-on:templatetype="templatenum"
      v-if="!templateChosen"
    />
    <div class="d-flex flex-row mb-6">
      <div id="menu">
        <!-- ## Removed from UserForm properties ##
      v-if="templateChosen" 
       -->
        <UserForm
          v-on:choosetemplate="choosetemplate"
          v-on:submitinfo="submit"
          v-if="templateChosen"
        />
      </div>
      <div class="pdfpane">
        <img src="./assets/logoec.png" />
        <vue-pdf-embed
          source="https://raw.githubusercontent.com/Shawn-Armstrong/Machine-Learning-Coursera/cf08f5f48285fbc7099a1de36c83a6f471cf21ed/BigTheta.pdf"
        />
      </div>
    </div>
  </v-app>
</template>

<script>
import UserForm from './components/User-Form.vue';
import CardTemplates from './components/Card-Templates.vue';
import axios from 'axios';
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed';

export default {
  name: 'App',

  components: {
    UserForm,
    CardTemplates,
    VuePdfEmbed,
  },
  data() {
    return {
      templateChosen: false,
      cardInfo: {
        personalInfo: {
          name: '',
          companyName: '',
          email: '',
          phoneNumber: '',
          address: '',
          website: '',
        },
        templateInfo: {
          number: '',
        },
        source1:
          'https://raw.githubusercontent.com/Shawn-Armstrong/Machine-Learning-Coursera/cf08f5f48285fbc7099a1de36c83a6f471cf21ed/BigTheta.pdf',
      },
    };
  },
  methods: {
    choosetemplate(variable) {
      this.templateChosen = variable;
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
    templatenum(templateInfo) {
      this.cardInfo.templateInfo = templateInfo;
      console.log(this.cardInfo.templateInfo);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
}

#app div {
}
.pdfpane {
  border: 5px dotted red;
  width: 50%;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-left: 50px;
}
.menu {
  border: 1px solid grey;
  width: 50%;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-left: 50px;
}

.vue-pdf-embed {
  align: center;
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
