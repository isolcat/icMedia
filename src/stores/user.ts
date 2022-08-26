import { defineStore } from 'pinia';

export const mainStore = defineStore('main', {
    state: () => {
        return {
            login: require('../assets/images/login.png')
        }
    },
    // 开启持久化
    persist: {
        enabled: true,
        strategies: [
            { storage: localStorage, paths: ['login'] }
        ],
    },
    getters: {

    },
    actions: {
        changeHeadShot() {
            console.log('数据存储成功');
            this.login = require('../assets/images/head.png')
        }
    }
})