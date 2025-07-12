<template>
  <div id="summarycard-container">
    <div class="seperator">
    <p class="quote">
      <i class="fa-solid fa-heart" id="heart-icon"></i>
      &nbsp;
      {{ quote }}
    </p>
    </div>
    <div class="seperator">
      <p class="preamble">My names are</p>
      <h2><span>{{ name }} </span><span>"{{ nickname }}" </span><span>{{ lastname }}</span></h2>
    </div>
        <div class="seperator">
      <p class="preamble">I live in</p>
      <h2><span>{{ city }}, </span><span>{{ country }}</span></h2>
    </div>
      <div class="seperator">
      <p class="preamble">Something I think the world should know is</p>
      <h2>{{ advice }}</h2>
    </div>
  </div>
</template>

<script setup>
import { useFormDataStore } from '../stores/FormDataStore'
const formStore = useFormDataStore()
import { ref } from "vue";
const name = ref(formStore.firstName)
const nickname = ref(formStore.nickName)
const lastname = ref(formStore.lastName)
const advice = ref(formStore.advice)
const city = ref(formStore.city)
const country = ref(formStore.country)
const quote = ref(formStore.quote)
</script>

<style scoped>
#summarycard-container {
    width: 70vw;
    height: 50vh;
    background-color: azure;
    border-radius: 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 0, 0, 0.23);
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.quote {
  color: rgb(14, 14, 14);
  font-size: 1em;
  font-style: italic;
  text-align: left;
} 

.seperator {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.preamble {
  color: rgb(14, 14, 14);
  font-size: 1em;
  align-self: flex-start;
  margin: 0;
}
#heart-icon {
  color: rgba(255, 0, 13, 0.583);
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
  margin: 0;
   align-self: flex-start;
}

h3 {
  align-self: flex-start;
  margin: 0;
}
</style>
