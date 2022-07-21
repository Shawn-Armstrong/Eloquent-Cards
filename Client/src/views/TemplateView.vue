<template>
  <div id="app">
    <h1>Templates</h1>
<<<<<<< HEAD
    <Form  v-on:choosetemplate="choosetemplate" v-on:submitinfo="submit" v-if="templateChosen"/>

    <Templates v-on:choosetemplate="choosetemplate" v-on:templatetype="templatenum" v-if="!templateChosen"/>
    
=======

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
>>>>>>> routing
  </div>
</template>

<script>
<<<<<<< HEAD
import Templates from "../components/Templates.vue";
import Form from "../components/User_Form.vue";


export default {
  name: "App",
=======
import Templates from '../components/Templates.vue';
import Form from '../components/User_Form.vue';

export default {
  name: 'App',
>>>>>>> routing
  components: {
    Templates,
    Form,
  },
  data() {
    return {
<<<<<<< HEAD
      templateChosen: true
=======
      templateChosen: true,
>>>>>>> routing
    };
  },
  methods: {
    choosetemplate(variable) {
      this.templateChosen = variable;
    },
<<<<<<< HEAD
    templatenum(templateInfo){
      this.templateInfo = templateInfo;
      console.log(this.templateInfo)
    } 
=======
    templatenum(templateInfo) {
      this.templateInfo = templateInfo;
      console.log(this.templateInfo);
    },
>>>>>>> routing
  },
};
</script>

<style>
#app {
<<<<<<< HEAD
  font-family: "Avenir", Helvetica, Arial, sans-serif;
=======
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
>>>>>>> routing
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> routing
