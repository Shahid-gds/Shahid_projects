<template>
    <div
        class="bg-[url('@/assets/images/Login-bg.png')] bg-cover h-screen flex justify-center items-center text-center">


        <XyzTransition appear duration="auto" xyz="fade up-5 duration-10">
            <div class="w-[30rem] px-10 my-4 space-y-8">
                <div v-if="!isCodeValid && !loading">
                    <h1>CODE IS INVALID</h1>
                </div>
                <div v-if="isCodeValid" class="space-y-7">
                    <div class="space-y-4">
                        <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto bg-primary/10">
                            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-primary/25">
                                <img class="mx-auto w-10 h-10 my-auto" src="@/assets/icons/auth/lock.svg" alt="">
                            </div>
                        </div>
                        <h1 class="text-3xl font-bold">Reset Password</h1>
                        <p class="text-gray-500">Enter new password and confirm password</p>
                        <div v-if="passwordMismatch"
                            class="w-full border border-red-600 text-red-600 bg-red-100 p-3 rounded-md text-center ">
                            Password does not match
                        </div>
                        <teleport to="body">
                            <vue3-snackbar top :duration="4000"></vue3-snackbar>
                        </teleport>
                    </div>

                    <div v-if="isCodeValid" class="space-y-4">
                        <form @submit.prevent="verifyPassword" class="w-full space-y-4 flex flex-col">
                            <div class=" border rounded-md relative">
                                <input placeholder="New Password"
                                    class="border-none placeholder:text-gray-400 text-gray-400 focus:ring-0 w-full rounded-md"
                                    :type="showNewPassword ? 'text' : 'password'" v-model="newPassword">
                                <img v-if="!showNewPassword"
                                    class="w-6 h-6 absolute right-2 top-2 cursor-pointer bg-white"
                                    @click="showNewPassword = !showNewPassword" src="@/assets/icons/auth/Hide.svg"
                                    alt="">
                                <img v-if="showNewPassword"
                                    class="w-6 h-6 absolute right-2 top-2 cursor-pointer bg-white"
                                    @click="showNewPassword = !showNewPassword" src="@/assets/icons/auth/Show.svg"
                                    alt="">
                            </div>
                            <div class=" border flex rounded-md relative">
                                <input placeholder="Confirm Password"
                                    class="border-none placeholder:text-gray-400 text-gray-400 focus:ring-0 w-full rounded-md"
                                    :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword"
                                    @input="validate($event)">

                                <img v-if="!showConfirmPassword"
                                    class="w-6 h-6 absolute right-2 top-2 cursor-pointer bg-white"
                                    @click="showConfirmPassword = !showConfirmPassword"
                                    src="@/assets/icons/auth/Hide.svg" alt="">
                                <img v-if="showConfirmPassword"
                                    class="w-6 h-6 absolute right-2 top-2 cursor-pointer bg-white"
                                    @click="showConfirmPassword = !showConfirmPassword"
                                    src="@/assets/icons/auth/Show.svg" alt="">
                            </div>



                            <div v-if="loading" class="mx-auto" role="status">
                                <svg aria-hidden="true"
                                    class="mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
                                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                            <button v-if="!loading" type="submit" :disabled="passwordMismatch"
                                :class="{ 'cursor-not-allowed bg-primary/30': passwordMismatch }"
                                class="w-full rounded-md text-white py-2 bg-primary">Reset
                                password</button>
                        </form>
                    </div>

                </div>
            </div>
        </XyzTransition>


    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { fb } from '@/_firebase/init'

import { ref } from 'vue'
import { useSnackbar } from "vue3-snackbar";
const snackbar = useSnackbar();
const route = useRoute();

const code = ref(route.query.oobCode)
const loading = ref(false);
const showConfirmPassword = ref(false);
const showNewPassword = ref(false);

const newPassword = ref('');
const confirmPassword = ref('');
const passwordMismatch = ref(false);
const required = ref(false);

const isCodeValid = ref(false);


const validate = (e) => {

    if (newPassword.value != confirmPassword.value) {
        passwordMismatch.value = true;
        console.log(e.target.value)
    } else {
        passwordMismatch.value = false;
        console.log("Invalid Input")
    }
}

const verifyPassword = () => {
    if (newPassword.value === '' || confirmPassword.value === '') {
        required.value = true;
    }
    else if ((newPassword.value != confirmPassword.value)) {
        passwordMismatch.value = true;
        return;
    } else {
        resetPassword();
    }
}


const resetPassword = () => {
    loading.value = true;
    fb.auth().confirmPasswordReset(code.value, newPassword.value)
        .then(() => {
            snackbar.add({
                type: 'success',
                title: "Message",
                text: 'Your Password Has been reset successfully.'
            })
            newPassword.value = null;
            confirmPassword.value = null;
            loading.value = false;
        })
        .catch(() => {
            loading.value = false;
            console.log("PASSWORD RESET FAILED");
        })
}

const verifyPasswordResetCode = () => {
    loading.value = true;
    fb.auth().verifyPasswordResetCode(code.value).then(() => {
        console.log('code valid')
        isCodeValid.value = true;
        loading.value = false;
    }).catch((error) => {
        isCodeValid.value = false;
        loading.value = false;
        console.log('code Invalid', error)
    })

}

verifyPasswordResetCode();




</script>