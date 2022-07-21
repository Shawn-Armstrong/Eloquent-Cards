<template>
  <div id="app">
    <NavBar />
    <div class="spacer"></div>

    <div class="d-flex flex-row justify-center">
      <div pa-md-4 id="menu">
        <UserForm
          v-on:submitinfo="submit"
          v-on:submitpreview="submit_preview"
        />
        <div class="mt-15">
          <CardTemplates v-on:templatetype="templatenum" />
        </div>
      </div>

      <div class="pdfpane">
        <v-img class="mb-10" src="@/assets/logoec.png" />
        <vue-pdf-embed :source="source1" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import UserForm from '@/components/User-Form.vue';
import CardTemplates from '@/components/Card-Templates.vue';
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed';
import NavBar from '@/components/Nav-Bar.vue';

export default {
  name: 'GenerateCard',

  components: {
    UserForm,
    CardTemplates,
    VuePdfEmbed,
    NavBar,
  },
  data() {
    return {
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
        'https://raw.githubusercontent.com/Shawn-Armstrong/Machine-Learning-Coursera/23403e54b45284e7c48b9c1945f45a31533fa706/Card-theme-1-Back.pdf',
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

.spacer {
  margin-bottom: 120px;
}
</style>
