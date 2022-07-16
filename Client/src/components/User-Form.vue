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
        v-model="personalInfo.title"
        :counter="26"
        :rules="titleRules"
        label="Job Title"
        required
      ></v-text-field>

      <v-text-field
        v-model="personalInfo.companyName"
        :counter="10"
        :rules="companynameRules"
        label="Company Name"
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
        v-model="personalInfo.website"
        :counter="10"
        :rules="websiteRules"
        label="Website"
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

      <div class="mt-4">
        <v-btn color="#d53953" @click="back" class="mx-3">
          <v-icon>mdi-arrow-left-bold-outline</v-icon> &nbsp; Back
        </v-btn>

        <v-btn color="#d53953" @click="reset" class="mx-3">
          <v-icon>mdi-trash-can-outline</v-icon> &nbsp; Reset Form
        </v-btn>

        <v-btn color="#d53953" @click="submit" class="mx-3">
          <v-icon>mdi-cloud-download-outline</v-icon> &nbsp; Download Card
        </v-btn>

        <v-btn color="#d53953" @click="submit_preview" class="mx-3">
          <v-icon>mdi-eye-outline</v-icon> &nbsp; Preview Card
        </v-btn>
      </div>
    </v-form>
  </section>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      valid: true,
      personalInfo: {
        name: '',
        company: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        website: '',
        title: '',
      },
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        //(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      addressRules: [(v) => !!v || 'Address is required'],
      phoneNumberRules: [(v) => !!v || 'Phone Number is required'],
      companynameRules: [(v) => !!v || 'Company Name is required'],
      websiteRules: [
        (v) =>
          (v && v.length <= 10) || 'Website must be less than 10 characters',
      ],
      titleRules: [
        (v) => !!v || 'Job Title is required',
        (v) =>
          (v && v.length <= 20) || 'Job Title must be less than 20 characters',
      ],
    };
  },
  methods: {
    back() {
      this.$emit('choosetemplate', false);
    },
    submit() {
      console.log('child submit function');
      this.$emit('submitinfo', this.personalInfo);
    },
    submit_preview() {
      console.log('child submit function');
      this.$emit('submitpreview', this.personalInfo);
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
