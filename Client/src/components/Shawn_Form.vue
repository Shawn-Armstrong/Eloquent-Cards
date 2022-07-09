<template>
  <form @submit.prevent="handleSubmit">
    <label>Name:</label>
    <input type="name" v-model="cardInfo.name" required />

    <label>Company:</label>
    <input type="company" v-model="cardInfo.company" required />

    <label>Email:</label>
    <input type="email" v-model="cardInfo.email" required />

    <label>Phone Number:</label>
    <input type="phoneNumber" v-model="cardInfo.phoneNumber" required />

    <div class="submit">
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      cardInfo: {
        name: '',
        company: '',
        email: '',
        phoneNumber: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      axios.post('http://localhost:5000/api/user_data', this.cardInfo);
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
