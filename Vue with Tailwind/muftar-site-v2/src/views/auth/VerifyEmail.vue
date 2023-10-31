<template>
    <div class="w-full">
        <div v-if="showPopup" class="backdrop"></div>
        <div v-if="showPopup" class="popup p-28 rounded-xl space-y-4">
            <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C58A8"
                    class="w-16 h-16">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
            </div>
            <p class="text-[red]">Verification has expired</p>
            <div class="border-2 text-center text-[#3C58A8] border-[#3C58A8] px-6 p-1.5 rounded-lg">
                <button @click="resendCode">Resend</button>
            </div>
        </div>
        <div class="main-container flex">
            <div class="sm:mt-[10%] w-full flex justify-center">
                <div class="px-6">
                   <div class="md:block hidden">
                    <div class="flex justify-center pb-5">
                        <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.287 0.436752L24.521 16.27C24.1088 16.6375 23.5759 16.8406 23.0236 16.8406C22.4714 16.8406 21.9384 16.6375 21.5263 16.27L3.686 0.445752C4.1119 0.315851 4.55473 0.249883 5 0.250002H41C41.4358 0.249607 41.8693 0.312514 42.287 0.436752ZM45.338 3.553C45.4438 3.9355 45.5 4.336 45.5 4.75V27.25C45.5 28.4435 45.0259 29.5881 44.182 30.432C43.3381 31.2759 42.1935 31.75 41 31.75H5C3.80653 31.75 2.66193 31.2759 1.81802 30.432C0.974106 29.5881 0.5 28.4435 0.5 27.25V4.75C0.5 4.33375 0.55625 3.931 0.662 3.5485L18.5315 19.6315C19.7679 20.7334 21.3663 21.3423 23.0225 21.3423C24.6787 21.3423 26.2771 20.7334 27.5135 19.6315L45.338 3.553Z" fill="#00008E"/>
                        </svg>                            
                    </div>
                   </div>
                    <div class="">
                        <h1 class="xl:text-[64px] sm:text-[45px] text-[25px] font-[700] text-[#20184E] md:text-center">Verify Your Email!</h1>
                    </div>
                    <div class="text-[#666] sm:text-center sm:text-lg">
                        <p>Enter the 6-digit code you received in your email</p>
                    </div>
                    <div class="mt-5 px-6 lg:block hidden">
                        <div class="pb-2 w-full flex justify-center">
                            <div v-for="(digit, index) in codeDigits" :key="index" class="mx-3 inline-block sm:w-[54px] w-[35px] sm:h-[70px] text-center">
                                <input v-model="codeDigits[index]" type="text"
                                    class="border-2 w-full outline-none p-2 text-center h-[70px]"
                                    :class="{ 'border-red-500': emptyFields.includes('code') }"
                                    maxlength="1" @paste="handlePaste($event, index)"  
                                    @input="handleInput($event, index)"
                                    @keydown="handleKeyDown($event, index)">
                                    <span v-if="index < codeDigits.length - 1" class="absolute ml-1.5 mt-[2rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="2" viewBox="0 0 11 2" fill="#9F9F9F">
                                            <path d="M0 1H10.5" stroke="#9F9F9F"/>
                                          </svg>
                                    </span>
                            </div>
                        </div>
                        <div class="text-[red] text-center">
                            {{ responseMessage }}
                        </div>
                        <div class="text-[#BEBEBE] text-center">
                            {{ attemptMessage }}
                        </div>
                    </div>
                    <div class="mt-5 lg:hidden">
                        <div class="py-28 flex justify-center">
                            <div v-for="(digit, index) in codeDigits" :key="index" class="mx-2 inline-block  h-[35px] w-[37px] text-center">
                                <input v-model="codeDigits[index]" type="text"
                                    class="border-2 w-full outline-none text-center rounded-md h-[49px]"
                                    :class="{ 'border-red-500': emptyFields.includes('code') }"
                                    maxlength="1" @paste="handlePaste($event, index)"  
                                    @input="handleInput($event, index)"
                                    @keydown="handleKeyDown($event, index)">
                                    <span v-if="index < codeDigits.length - 1" class="absolute sm:ml-1.5 ml-0.5 sm:mt-[2rem] mt-[1.5rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="2" viewBox="0 0 11 2" fill="#9F9F9F">
                                            <path d="M0 1H10.5" stroke="#9F9F9F"/>
                                          </svg>
                                    </span>
                            </div>
                        </div>
                        <div class="text-[red] text-center">
                            {{ responseMessage }}
                        </div>
                        <div class="text-[#BEBEBE] text-center">
                            {{ attemptMessage }}
                        </div>
                    </div>
                    <div class="lg:hidden">
                        <div class="flex space-x-2 text-[40px] py-6 text-[#20184E] justify-center">
                            <div> {{ formattedTime }} </div>
                        </div>
                       </div>
                       <div class="lg:hidden">
                        <div class="text-[#2355C4] font-[800] sm:text-[18px] text-center">
                            <p>Resend Email Verification</p>
                        </div>
                       </div>
                    <div class="flex space-x-6 items-center justify-center py-6">
                        <div class="text-center bg-[#00008E] px-6 p-4 rounded-lg cursor-pointer sm:w-[350px] w-[250px]"
                            :class="{ 'cursor-not-allowed': !showVerify }" :disabled="!showVerify"
                            :style="{ borderColor: showVerify ? '#666668' : '#BEBEBE', color: showVerify ? '#fff'  : '#BEBEBE' }" @click="verify(userID)">
                            <button :class="{ 'cursor-not-allowed': !showVerify }">Confirm</button>
                        </div>
                    </div>
                   <div class="lg:block hidden">
                    <div class="flex space-x-2 text-[48px] text-[#20184E] justify-center">
                        <div> {{ formattedTime }} </div>
                    </div>
                   </div>
                   <div class="lg:block hidden">
                    <div class="text-[#00008E] font-[800] text-[18px] py-8 text-center">
                        <p>Resend Email Verification</p>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-white opacity-80 z-50">
            <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
const isLoading = ref(false)
const totalSeconds = ref(10 * 60);
const showPopup = ref(false);
const showResend = ref(false)
const showVerify = ref(true)
// const baseUrl = 'http://192.168.18.62:3000'
const baseUrl = 'https://ecostructure-demo.muftar.com'
const handlePaste = (event, index) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text/plain');
    for (let i = 0; i < pastedText.length && index + i < codeDigits.value.length; i++) {
        codeDigits.value[index + i] = pastedText.charAt(i);
    }
    const lastInputIndex = Math.min(index + pastedText.length, codeDigits.value.length - 1);
    const lastInput = document.querySelectorAll('input[type="text"]')[lastInputIndex];
    if (lastInput) {
        lastInput.focus();
    }
};
const handleInput = (event, index) => {
        const inputElement = event.target;
        const inputLength = inputElement.value.length;
        if (inputLength === 1 && index < codeDigits.value.length - 1) {
            const nextInput = inputElement.parentElement.nextElementSibling.querySelector('input[type="text"]');
            if (nextInput) {
                nextInput.focus();
            }
        }
    };
    const handleKeyDown = (event, index) => {
    if (event.keyCode === 8 || event.key === "Backspace") {
        event.preventDefault();
        codeDigits.value[index] = '';
        if (index > 0) {
            const prevInput = event.target.parentElement.previousElementSibling.querySelector('input[type="text"]');
            if (prevInput) {
                prevInput.focus();
            }
        }
    }
};
const decrementSeconds = () => {
    if (totalSeconds.value > 0) {
        totalSeconds.value--;
    } else {
        showPopup.value = true;
        showResend.value = true;
        showVerify.value = false;
    }
};
const formattedTime = computed(() => {
    const minutes = Math.floor(totalSeconds.value / 60);
    const seconds = totalSeconds.value % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})
const router = useRouter();
const code = ref('')
const emptyFields = ref('')
const invalidCode = ref(false)
const responseMessage = ref('');
const attemptMessage = ref('');
const incorrectCodeAttmpts = ref(1)
const codeDigits = ref(['', '', '', '', '', '']);


const getUserIDFromLocalStorage = () => {
    return localStorage.getItem('user_id:')
}
const userID = getUserIDFromLocalStorage();
const verify = (userID) => {
    isLoading.value = true
    emptyFields.value = [];
    invalidCode.value = false;
    const codeValue = codeDigits.value.join('')
    if (!codeValue) {
        emptyFields.value.push('code');
    }
    if (incorrectCodeAttmpts.value < 4) {
        axios.post(`${baseUrl}/register/verify`, {
            code: codeValue,
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
            router.replace('/on-boarding');
            processing.value = false
        }).catch((error) => {
            console.error('There was an error sending the message:', error);
            if (error.response && error.response.status === 400) {
                invalidCode.value = true;
                responseMessage.value = 'Verification code not found'
                attemptMessage.value = `You can try three times. (${incorrectCodeAttmpts.value} attempt)`;
                incorrectCodeAttmpts.value++;
                if (incorrectCodeAttmpts.value >= 4) {
                    showVerify.value = false
                    showResend.value = true
                    showPopup.value = true
                }
            } else {
                responseMessage.value = `Please enter you verification Code`;
            }
            isLoading.value = false
        })
    }

}
const resendCode = () => {
    if (showResend.value) {
        showResend.value = false
        const totalSeconds = ref(10 * 60);
        axios.get(`${baseUrl}/register/re_verify`, {
            headers: {
                'userID': userID,
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.data);
                responseMessage.value = 'New Verfication Code Send..!'
                showPopup.value = false
            })
            .catch((error) => {
                console.error('Error resending verification code:', error);
            });
    }
}
onMounted(() => {
    const timeInterval = setInterval(decrementSeconds, 1000);

    return () => clearInterval(timeInterval);
})
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
}</style>