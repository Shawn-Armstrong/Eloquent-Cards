<template>
<section>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="personalInfo.name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="personalInfo.email"
      :counter="10"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="personalInfo.phoneNumber"
      :counter="10"
      :rules="phoneNumberRules"
      label="Phone Number"
      required
    ></v-text-field>

    <v-text-field
      v-model="personalInfo.address"
      :counter="10"
      :rules="addressRules"
      label="Address"
      required
    ></v-text-field>

    <v-btn color="blue" @click="back"> Back </v-btn>

    <v-btn color="blue" @click="reset"> Reset Form </v-btn>

    <v-btn color="blue" @click="submit"> SUBMIT </v-btn>
  </v-form>
</section>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      valid: true,
      personalInfo: {
        name: "",
        company: "",
        email: "",
        phoneNumber: "",
      },
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        //(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      addressRules: [
        (v) => !!v || "Address is required",
      ],
      phoneNumberRules: [
        (v) => !!v || "Phone Number is required",
      ],
    };
  },
  methods: {
    back() {
      this.$emit('choosetemplate', false)
    },
    submit() {
      console.log("child submit function")
      this.$emit('submitinfo', this.personalInfo);
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
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
