<template>
  <div id="app">
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
  </div>
</template>

<script>
import Templates from './components/Templates.vue';
import Form from './components/Form.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Templates,
    Form,
  },
  data() {
    return {
      templateChosen: false,
      cardInfo: {
        personalInfo: {
          name: '',
          company: '',
          email: '',
          phoneNumber: '',
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

      // axios.post('http://localhost:5000/api/download_card', this.cardInfo);
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
