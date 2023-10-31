<template>
    <div v-if="success" class="bg-white fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg border-2 space-y-4">
            <div class="flex justify-center">
                <img class="w-full" src="@/assets/icons/plane-paper.svg" alt="">
            </div>
         <div class="flex justify-center">
            <p class="text-xl font-semibold text-[#3D5AA9]">Message sent successfully.</p>
         </div>
          <div class="flex justify-center">
            <router-link to="/" class="bg-[#3D5AA9] p-3 px-6 rounded-lg text-white">
                Go back to Home
          </router-link>
          </div>
        </div>
    </div>
    <section v-else class="media-section">
        <div class="container w-full mx-auto p-6 pb-16 2xl:px-36">
            <div class="w-full items-center lg:space-x-20">
                <div class="container mx-auto mt-20">
                    <div class="w-1/2 h-1/2 -left-80 -top-80 absolute">
                        <img src="@/assets/images/blueblurTop.svg" alt="">
                    </div>
                </div>
                <div class="text-[2rem] font-[900] uppercase text-[#3D5AA9] text-center">
                    <h1>Send Us a Message</h1>
                </div>
                <div class="text-center xl:px-64 sm:px-20 text-[#444444]">
                    <p>For general questions about Muftar, fill out the form below and we will
                        reach back out to you as soon as possible:</p>
                </div>
                <div class="mt-10 space-y-12">
                    <div class="lg:flex lg:space-x-14">
                        <div class="w-full space-y-3 inputs-section z-30">
                            <div>
                                <label class="font-[900] text-[#444444] text-lg" for="">Your Name</label>
                            </div>
                            
                            <div class="w-full">
                                <input type="text" class="w-full p-4 px-10 rounded-lg bg-[#F2F2F2] border-2 outline-[#F2F2F2]" :class="{ 'border-red-500': emptyFields.includes('name') }" placeholder="John Doe" v-model="name" required>
                            </div>
                        </div>
                        <div class="w-full space-y-3 inputs-section">
                            <div>
                                <label class="font-[900] text-[#444444] text-lg" for="">Your Email Address</label>
                            </div>
                            <div class="w-full">
                                <input type="email" class="w-full p-4 px-10 rounded-lg bg-[#F2F2F2] border-2 outline-[#F2F2F2]" :class="{ 'border-red-500': emptyFields.includes('email') }" placeholder="sample@example.com" v-model="email" required>
                            </div>
                        </div>
                    </div>
                    <div class="lg:flex lg:space-x-14">
                        <div class="w-full space-y-3 inputs-section z-30">
                            <div>
                                <label class="font-[900] text-[#444444] text-lg" for="">Your Phone Number</label>
                            </div>
                            <div class="w-full">
                                <input type="text" class="w-full p-4 px-10 rounded-lg bg-[#F2F2F2] border-2 outline-[#F2F2F2]" :class="{ 'border-red-500': emptyFields.includes('phone') }" placeholder="+1 (555) 555-5555" v-model="phone" required>
                            </div>
                        </div>
                        <div class="w-full space-y-3">
                            <div>
                                <label class="font-[900] text-[#444444] text-lg" for="">Your Subject</label>
                            </div>
                            <div class="w-full">
                                <input type="text" class="w-full p-4 px-10 rounded-lg bg-[#F2F2F2] border-2 outline-[#F2F2F2]" :class="{ 'border-red-500': emptyFields.includes('subject') }" placeholder="My topic..." v-model="subject" required>
                            </div>
                        </div>
                    </div>
                    <div class="w-full space-y-3">
                        <div>
                            <label class="font-[900] text-[#444444] text-lg" for="">Your Message</label>
                        </div>
                        <div class="w-full">
                            <textarea type="text" class="w-full p-4 md:h-56 h-40 px-10 rounded-lg bg-[#F2F2F2] resize-none border-2 outline-[#F2F2F2]" :class="{ 'border-red-500': emptyFields.includes('message') }" placeholder="Type Message Here..." v-model="message" required>
                            </textarea> 
                        </div>
                    </div>
                    
                </div>
                <div class="flex justify-center mt-5">
                    <div></div>
                    <div class="bg-[#3A54B4] p-4 rounded-xl text-center text-[white] md:w-3/12" 
                    @click.prevent="submitContactForm()">
                        <button class="uppercase text-lg font-[900] justify-center">Submit Now</button>
                    </div>
                </div>
                <div class="text-center xl:px-64 px-20 text-[red] text-xl">
                    <p>{{ responseMessage }}</p>
                </div>
                <div class="sm:mt-48 lg:flex">
                  <div class="w-full flex space-x-4 contact-section">
                    <div class="text-[#AAA9A9] space-y-5 w-full">
                        <h1 class="font-[900]">MAIL US</h1>
                        <p class="">3355 Lenox Rd NE
                            Suite 1000
                            Atlanta, GA 30326</p>
                    </div>
                    <div class="text-[#AAA9A9] space-y-5 w-full">
                        <h1 class="font-[900]">CALL US</h1>
                        <p class="">Meet us at an event. Follow
                            us on social media for updates
                            on when we'll be attending a
                            trade show.</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
             
    </section>
</template>
<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';

const success = ref(false);
const name = ref('');
const email = ref('');
const phone = ref('');
const subject = ref('');
const message = ref('');
const responseMessage = ref('');
const emptyFields = ref([]);

const submitContactForm = async () => {
    emptyFields.value = [];

    if (!name.value || !email.value || !phone.value || !subject.value || !message.value) {
        responseMessage.value = 'Please fill in the required fields.';
        if (!name.value) emptyFields.value.push('name');
        if (!email.value) emptyFields.value.push('email');
        if (!phone.value) emptyFields.value.push('phone');
        if (!subject.value) emptyFields.value.push('subject');
        if (!message.value) emptyFields.value.push('message');
        return;
    }

    try {
        const res = await axios.post('https://muftardigital.pythonanywhere.com/contact', {
            name: name.value,
            email: email.value,
            phone: phone.value,
            subject: subject.value,
            message: message.value,
        });
        console.log(res.data);

        // Clear form fields
        name.value = '';
        email.value = '';
        phone.value = '';
        subject.value = '';
        message.value = '';

        // Show success popup
        success.value = true;
        responseMessage.value = 'Message sent successfully!';
    } catch (error) {
        console.error('There was an error sending the message:', error);
        responseMessage.value = 'Failed to send the message. Please try again later.';
    }
};

watch([name, email, phone, subject, message], () => {
    emptyFields.value = emptyFields.value.filter(field => {
        return field !== 'name' && field !== 'email' && field !== 'phone' && field !== 'subject' && field !== 'message';
    });
    responseMessage.value = '';
});
</script>
<style scoped>
.media-section {
    background-image: url('../assets/images/mediapageBg.svg');
    height: auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
.no-scroll {
    overflow: hidden;
  }
@media (max-width: 1024px) {
    .inputs-section{
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .contact-section{
            margin-top: 5rem;
        }
  }
</style>