import { defineStore } from 'pinia'

export const piniaStore = defineStore('counter', {
    state: () => ({
        data: {}
    })
})