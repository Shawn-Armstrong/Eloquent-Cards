<template>
  <v-container
    fluid
    style=" mt-10 justify-center margin: 0px; padding: 0px; width: 80%"
  >
    <v-sheet id="menu" class="pa-6 rounded-xl">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="personalInfo.name"
          :counter="20"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="personalInfo.title"
          :counter="20"
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
          :counter="20"
          :rules="websiteRules"
          label="Website"
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
          :counter="26"
          :rules="addressRules"
          label="Address"
          required
        ></v-text-field>

        <div class="mt-4">
          <v-btn color="#bf2e2e" @click="reset" class="mb-2 mx-3">
            <v-icon>mdi-trash-can-outline</v-icon> &nbsp; Reset Form
          </v-btn>

          <v-btn color="#bf2e2e" @click="submit" class="mb-2 mx-3">
            <v-icon>mdi-cloud-download-outline</v-icon> &nbsp; Download Card
          </v-btn>

          <v-btn color="#bf2e2e" @click="submit_preview" class="mb-2 mx-3">
            <v-icon>mdi-eye-outline</v-icon> &nbsp; Preview Card
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </v-container>
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
        (v) => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],

      emailRules: [(v) => !!v || 'E-mail is required'],

      addressRules: [(v) => !!v || 'Address is required'],

      phoneNumberRules: [(v) => !!v || 'Phone Number is required'],

      companynameRules: [(v) => !!v || 'Company Name is required'],

      websiteRules: [
        (v) =>
          (v && v.length <= 20) || 'Website must be less than 20 characters',
      ],

      titleRules: [
        (v) => !!v || 'Job Title is required',
        (v) =>
          (v && v.length <= 20) || 'Job Title must be less than 20 characters',
      ],
    };
  },
  methods: {
    submit() {
      console.log('child submit function');
      this.$refs.form.validate();
      if (this.valid == true) {
        this.$emit('submitinfo', this.personalInfo);
      }
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
.menu {
  border-radius: 50px;
}
</style>
