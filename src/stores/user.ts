import { defineStore } from 'pinia';

export const mainStore = defineStore('main', {
    state: () => {
        return {
            login: require('../assets/images/login.png')
        }
    },
    getters: {

    },
    actions: {

    }
})