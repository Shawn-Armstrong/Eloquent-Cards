<template>
  <div id="app">
    <Sidebar />
    <Form
      v-on:choosetemplate="choosetemplate"
      v-on:submitinfo="submit"
      v-if="templateChosen"
    />

    <Templates
      v-on:choosetemplate="choosetemplate"
      v-on:templatetype="templatenum"
      v-if="!templateChosen"
    />
    <div class="column">
        <simple-upload />
    </div>
  </div>
</template>

<script>
import Templates from './components/Templates.vue';
import Form from './components/Form.vue';
import Sidebar from './components/sidebar/Sidebar.vue';
import { sidebarWidth } from '@/components/sidebar/state';
import SimpleUpload from './components/SimpleUpload.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Templates,
    Form,
    Sidebar,
    SimpleUpload
  },
  setup() {
    return { sidebarWidth }
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
          title: '',
        },
        templateInfo: {
          number: '',
        },
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
</style>
