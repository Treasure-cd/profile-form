import { defineStore } from "pinia";

export const useFormDataStore = defineStore('formdata', {
    state: () => ({
       firstName: '',
       nickName: '',
       lastName: '',
       city: '',
       country: '',
       advice: '',
       quote: '' 
    })
})