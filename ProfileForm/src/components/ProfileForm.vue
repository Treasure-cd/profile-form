<template>

<div id="form-container">
  <h1>Profile Form</h1>
<form>
  <div>
  <label for="first-name">Your first name</label>
  <input  v-model="formStore.firstName" type="text" id="name" name="first name">  
  </div>
  <div>
  <label for="nickname">Your nickname, could be real or not</label>
  <input v-model="formStore.nickName" type="text" id="nickname" name="nickname">
  </div>
  <div>
  <label for="last-name">What is your last name?</label>
  <input v-model="formStore.lastName" type="text" id="name" name="last name">
  </div>
    <div>
  <label for="city">What city/state do you live in?</label>
  <input v-model="formStore.city" type="text" id="city" name="city">
  </div>
    <div>
  <label for="country">What country is {{ formStore.city }} in?</label>
  <input v-model="formStore.country" type="text" id="country" name="country">
  </div>
  <div>
  <label for="advice">Something you wish everyone knew:</label>
  <input v-model="formStore.advice" type="text" id="advice" name="advice":class="{ 'limit-reached': formStore.quote.length >= 50 }" @input="limitLength">
  </div>
    <p>{{ formStore.advice.length }}/50 characters</p>
  <div>
  <label for="quote">A quote that defines you:</label>
  <textarea
  v-model="formStore.quote"
  :class="{ 'limit-reached': formStore.quote.length >= 100 }"
  @input="limitLength"
  >
  </textarea>

  <p>{{ formStore.quote.length }}/100 characters</p>
  </div>

</form>
  <div>
  <router-link to="/summary">
    <button id="submit-button" @click="handleSubmit">Submit</button>
  </router-link>
  </div>
</div>
</template>


<script setup>
import { useFormDataStore } from '../stores/FormDataStore'
const formStore = useFormDataStore()
function handleSubmit() {
    if (formStore.partingWords.length > 100) {
    alert('Parting words too long! Please limit to 100 characters.')
    return
  }
  console.log("Submitted");
  console.log(formStore.quote);
}
function limitLength(e) {
  if (formStore.quote.length > 100) {
    formStore.quote = formStore.quote.slice(0, 100)
  }
    if (formStore.advice.length > 100) {
    formStore.advice = formStore.advice.slice(0, 100)
  }
}
</script>

<style scoped>
    #form-container {
    width: 70vw;
    min-height: 80vh;
    background-color: azure;
    border-radius: 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 0, 0, 0.23);
    padding: 20px 50px;
  display: flex;
  flex-direction: column;
  }

  form div {
     display: flex;
  flex-direction: column;
  text-align: left;
    margin-top: 10px;
  }

  label {
    color: black;
    font-weight: 600;
  }
  input, textarea {
    border: 1px solid black;
    border-radius: 10px;
    background: azure;
    color: rgb(12, 12, 12);
    font-family: "Noto sans", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
  }
  textarea {
    min-height: 100px;
    padding: 10px 10px;
  }
  input {
    height: 40px;
    padding: 5px 10px;
    font-size: 15px;
  }

  button {
    height: 50px;
    width: 100px;
    margin-top: 20px;
    font-size: larger;
    background-color: rgb(27, 27, 27);
    border-radius: 5px;
    border-color: 1px solid black;
    transition: 0.5s ease-in;
  }

 button:hover {
  border: 1px solid red;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

p {
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>
