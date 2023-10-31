// userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        fname: '',
        lname: '',
        phone: '',
        website: '',
        profileImage: '',
    }),
    actions: {
        saveUserData(userData) {
            // Update the store state
            this.fname = userData.fname;
            this.lname = userData.lname;
            this.phone = userData.phone;
            this.website = userData.website;
            this.profileImage = userData.profileImage;

            // Save to local storage
            localStorage.setItem('userProfile', JSON.stringify(this.$state));
        },
        // ... other actions
    },
});
