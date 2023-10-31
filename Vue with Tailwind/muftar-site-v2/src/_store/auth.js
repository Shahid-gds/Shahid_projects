
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
  }),
  actions: {
    setLoggedIn(status) {
      this.loggedIn = status;
    },
    login() {
      // Your login logic here
      this.setLoggedIn(true);
    },
    logout() {
      // Your logout logic here
      this.setLoggedIn(false);
    },
  },
});
