<template>
<section>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="personalInfo.name"
      :counter="26"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="personalInfo.title"
      :counter="26"
      :rules="titleRules"
      label="Job Title"
      required
    ></v-text-field>

    <v-text-field
      v-model="personalInfo.companyName"
      :counter="26"
      :rules="companynameRules"
      label="Company Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="personalInfo.email"
      :counter="26"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="personalInfo.website"
      :counter="26"
      :rules="websiteRules"
      label="Website"
      required
    ></v-text-field>

    <v-text-field
      v-model="personalInfo.phoneNumber"
      :counter="26"
      :rules="phoneNumberRules"
      label="Phone Number"
      required
    ></v-text-field>

    <v-text-field
      v-model="personalInfo.address"
      :rules="addressRules"
      label="Address"
      required
    ></v-text-field>

    <v-btn color="blue" @click="back"> Back </v-btn>

    <v-btn color="blue" @click="reset"> Reset Form </v-btn>

    <v-btn color="blue" @click="submit"> DOWNLOAD CARD </v-btn>
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
        companyName: "",
        website: "",
        title: "",
      },
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 26) || "Name must be less than 26 characters",
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
      companynameRules: [
        (v) => !!v || "Company Name is required",
      ],
      websiteRules: [
        (v) => !!v || "Website is required",
        (v) => (v && v.length <= 26) || "Website must be less than 26 characters",
      ],
      titleRules: [
        (v) => !!v || "Job Title is required",
        (v) => (v && v.length <= 20) || "Job Title must be less than 20 characters",
      ]
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
.v-text-field {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 200px;
  margin-right: 200px;
}
</style>
