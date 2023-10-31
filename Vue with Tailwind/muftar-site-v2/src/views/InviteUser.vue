<template>
    <div class="container mx-auto px-20 pb-20 mt-56">
        <section class="media-section">
            <div class="container w-full mx-auto p-6 pb-16 2xl:px-56 h-[50rem]">
                <div class="w-full items-center lg:space-x-20">
                    <div class="container mx-auto mt-20 ">
                        <div class="w-1/2 h-1/2 -left-96 -top-80 absolute">
                            <img src="@/assets/images/blueblurTop.svg" alt="">
                        </div>
                    </div>
                    <div class="text-[2rem] font-[900] uppercase text-[#3D5AA9] text-center">
                        <h1>Invite</h1>
                    </div>
                    <div class="text-center xl:px-40 sm:px-20 text-[#444444]">
                        <p>Enter your email below and we will
                            reach back out to you as soon as possible:</p>
                    </div>
                    <div class="mt-10 space-y-12">
                        <div class="w-full space-y-3 inputs-section z-30">
                            <div>
                                <label class="font-[900] text-[#444444] text-lg" for="">Your Email Address</label>
                            </div>
                            <div class="w-full">
                                <input type="email"
                                    class="w-full bg-white border text-left border-gray-300 rounded-md p-4 px-10 text-gray-700 focus:outline-none"
                                    placeholder="sample@example.com" v-model="email">
                            </div>
                        </div>
                    </div>
                    <div class="text-center xl:px-64 px-20 text-[red] text-xl py-6">
                        <p>{{ responseMessage }}</p>
                    </div>
                    <div class="flex justify-center">
                        <div></div>
                        <div class="bg-[#3A54B4] p-4 rounded-xl text-center text-[white] xl:w-3/12"
                            @click.prevent="submitRequest()">
                            <button class="uppercase text-lg font-[900] justify-center">Invite</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
const responseMessage = ref();
const email = ref()
const userId = localStorage.getItem('user_id:')
const submitRequest = () => {
    responseMessage.value = null;
    let data = JSON.stringify({
        email: email.value
    });

    let config = {
        method: 'post',
        url: 'https://ecostructure-demo.muftar.com/invite_email',
        headers: {
            userID: userId,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            responseMessage.value  = 'Invitation Sent successfully....!'
        })
        .catch((error) => {
            console.log(error);
        if (error.response.data.message === 'Please enter valid email') {
            responseMessage.value = "Please Enter User Email"
        }
        if (error.response.data.message === 'You already invite this email..!') {
            responseMessage.value = "This Email is already Invited.."
        }
        });

}
</script>
<style scoped>
.media-section {
    background-image: url('@/assets/images/mediapageBg.svg');
    height: auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.no-scroll {
    overflow: hidden;
}

/*.section-fade-enter-active, .section-fade-leave-active {
       transition: opacity 0.5s, transform 0.5s;
     }
     .section-fade-enter, .section-fade-leave-to {
       opacity: 0;
       transform: translateX(20px);
     }*/
@media (max-width: 1024px) {
    .inputs-section {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .contact-section {
        margin-top: 5rem;
    }
}</style>