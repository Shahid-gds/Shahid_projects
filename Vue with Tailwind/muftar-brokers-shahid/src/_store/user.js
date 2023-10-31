import { defineStore } from 'pinia';

export const useWalletStore = defineStore('user', {
  state: () => ({
    userID: '',
  }),
  actions: {
    getUser() {
      this.userID = localStorage.getItem('userID') === 'true';
    },
  },
});