<template>
  <div id="app">
    <h1>Templates</h1>
    <Form  v-on:choosetemplate="choosetemplate" v-on:submitinfo="submit" v-if="templateChosen"/>

    <Templates v-on:choosetemplate="choosetemplate" v-on:templatetype="templatenum" v-if="!templateChosen"/>
    
  </div>
</template>

<script>
import Templates from "../components/Templates.vue";
import Form from "../components/User_Form.vue";


export default {
  name: "App",
  components: {
    Templates,
    Form,
  },
  data() {
    return {
      templateChosen: true
    };
  },
  methods: {
    choosetemplate(variable) {
      this.templateChosen = variable;
    },
    templatenum(templateInfo){
      this.templateInfo = templateInfo;
      console.log(this.templateInfo)
    } 
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>