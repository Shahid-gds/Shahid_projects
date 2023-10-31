<template>
    <div>
        <div v-if="showPopup" class="backdrop"></div>
        <!-- <div v-if="showPopup" class="popup p-28 rounded-xl space-y-4">
        <div class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C58A8" class="w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
        </div>          
        <p class="text-[red]">Verification has expired</p>
        <div class="border-2 text-center text-[#3C58A8] border-[#3C58A8] px-6 p-1.5 rounded-lg">
            <button>Resend</button>
        </div>
    </div> -->
        <div class="main-container container mx-auto px-20 pb-40 mt-64">
            <div class="flex justify-center">
                <div class="border-2 p-16 rounded-lg">
                    <div>
                        <h1 class="text-2xl pb-10 text-[#3C58A8]">Verify Email</h1>
                    </div>
                    <div class="text-[#BEBEBE] text-lg">
                        <p>Check your Email. The verification code has been sent to your email.</p>
                    </div>
                    <div class="mt-5">
                        <div class="text-lg text-[#666668] font-[900]">
                            <p>Enter Verification Code</p>
                        </div>
                        <div class="pb-2 w-full">
                            <input type="text" class="border-2 w-full px-6 outline-none p-2 rounded-lg"
                                :class="{ 'border-red-500': emptyFields.includes('code') }" v-model="code">
                        </div>
                        <div class="text-[red]">
                            {{ responseMessage }}
                        </div>
                        <div class="text-[#BEBEBE]">
                            {{ attemptMessage }}
                        </div>
                        <div class="flex space-x-6 items-center">
                            <!-- <div class="text-[#666668]">
                    <div class="border-2 text-center text-[#3C58A8] border-[#3C58A8] px-6 p-1.5 rounded-lg" v-if="showResend">
                        <button>Resend</button>
                    </div>
                     <p v-if="seconds > 0">The Verification will expire in {{ seconds }} sec</p>
                     <p v-else>Verification has expired</p>
                 </div> -->
                        </div>
                    </div>
                    <div class="flex space-x-6 items-cente mt-10 w-full">
                        <div :class="{'cursor-not-allowed': !showResend}" class="border-2 text-center text-[#666668] border-[#666668] px-6 p-1.5 rounded-lg w-full" :disabled="!showResend" :style="{borderColor: showResend ? '#666668' : '#BEBEBE', color: showResend ? '#666668' : '#BEBEBE'}">
                            <button :class="{'cursor-not-allowed': !showResend}" @click="resendCode">Resend</button>
                        </div>
                        <div class="border-2 text-center w-full text-[#3C58A8] border-[#3C58A8] px-6 p-1.5 rounded-lg">
                            <button @click="verify(userID)">Verify</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';

// const seconds = ref(10)
// const showPopup = ref(false);
const showResend = ref(false)

// const decrementSeconds = () => {
//     if (seconds.value > 0) {
//         seconds.value--;
//     } else {
//         // showPopup.value = true;
//         showResend.value = true
//     }
// };

const router = useRouter();
const code = ref('')
const emptyFields = ref('')
const invalidCode = ref(false)
const responseMessage = ref('');
const attemptMessage = ref('');
const incorrectCodeAttmpts = ref(1)


const getUserIDFromLocalStorage = () => {
    return localStorage.getItem('user_id:')
}
const userID = getUserIDFromLocalStorage();
const verify = (userID) => {
    console.log('Verified')
    emptyFields.value = [];
    invalidCode.value = false
    if (!code.value) {
        if (!code.value) emptyFields.value.push('code');
    }
    axios.post('https://ecostructure-demo.muftar.com/register/verify', {
        code: code.value,
    }, {
        headers: {
            'userID': userID,
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        console.log(res.data);

        //     // Show success popup
        //   VerifyEmail.value = true;
        incorrectCodeAttmpts.value = 0;
        responseMessage.value = 'Verification successfuly completed!';
        router.replace('/login');
        //   processing.value = false
        
        
    }).catch((error) => {
        console.error('There was an error sending the message:', error);
        if(error.response && error.response.status === 400) {
            invalidCode.value = true;
            responseMessage.value = 'Verification code not found'
            attemptMessage.value = `You can try three times. (${incorrectCodeAttmpts.value} attempt)`;
           incorrectCodeAttmpts.value++;
            if(incorrectCodeAttmpts.value >= 4){
                showResend.value = true
            }
        } else{
            responseMessage.value = `Please enter you verification Code`;
        }
        
        //   processing.value = false
    })
}
const resendCode = () => {
    if(showResend.value){
        showResend.value = false
    axios.get('https://ecostructure-demo.muftar.com/register/re_verify', {
        headers: {
            'userID': userID,
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        console.log(response.data);
        responseMessage.value = 'New Verfication Code Send..!'
    })
    .catch((error) => {
        console.error('Error resending verification code:', error);
    });
}
}
// onMounted(() => {
//     const timeInterval = setInterval(decrementSeconds, 1000);

//     return () => clearInterval(timeInterval);
// })
</script>
<style scoped>
.main-container {
    background-image: url('@/assets/images/mediapageBg.svg');
    height: auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    paint-order: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}
</style>