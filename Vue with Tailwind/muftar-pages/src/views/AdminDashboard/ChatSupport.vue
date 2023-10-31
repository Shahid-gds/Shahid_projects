<template>
    <div class="p-6 flex w-full space-x-3">
        <div class="border-2  rounded-lg p-4">
            <div class="flex space-x-4 pb-6">
                <div class="p-1 border-2 px-6 text-[#3A54B4] rounded-full border-[#3A54B4] cursor-pointer font-bold">Unread</div>
                <div class="p-1 border-2 px-6 text-[#3A54B4] rounded-full border-[#3A54B4] cursor-pointer font-bold">Resolved</div>
                <div class="p-1 border-2 px-6 text-[#3A54B4] rounded-full border-[#3A54B4] cursor-pointer font-bold">Recent</div>
            </div>
            <!-- User profile data -->
            <div class="cursor-pointer" v-for="item in menu" :key="item" @click="toggleUserProfile(item)" :class="{ 'active bg-[#3A54B4] text-white shadow-lg rounded-lg': item === selectedProfile }">
                <div class="flex space-x-3 p-4">
                    <div class="">
                        <img class="rounded-full" :src="item.profileImage" :alt="item.profileImage">
                    </div>
                    <div class="py-2">
                        <h1 class="text-xl">{{item.name}}</h1>
                        <p class="text-sm">{{item.message}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full border-2 rounded-lg flex flex-col justify-between">
            <!-- Help and Support Conversations -->
            <div class="w-full h-full flex flex-col items-center justify-center" v-if="!showUserProfile">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                </div>
                <div>
                    <h1 class="text-xl">Help and Support Conversations</h1>
                    <p class="text-sm text-center">Send and Receive Messages</p>
                </div>
            </div>
            <!-- User Messages and Profile View Screen -->
            <div class="w-full" v-if="showUserProfile && selectedProfile">
                <div class="border-b-2 p-6">
                    <h1 class="text-xl font-bold">{{selectedProfile.sender.headerMessage}}</h1>
                    <p class="text-[#7D7D7D]">{{selectedProfile.sender.headerDis}}</p>
                </div>
                <div v-for="message in selectedProfile.messages" :key="message.id">
                    <!-- Sender Message Detail -->
                    <div class="flex items-center" v-if="message.sender">
                        <div class="p-4">
                            <img class="rounded-full" :src="selectedProfile.profileImage" :alt="selectedProfile.profileImage">
                        </div>
                        <div class="mt-5">
                            <h1 class="bg-[#DFDFED] rounded-lg p-4">{{message.text}}</h1>
                            <p class="text-right text-[#959595]">{{message.time}}</p>
                        </div>
                    </div>
                    <!-- Received by Detail -->
                    <div class="flex items-center justify-end" v-else>
                        <div>
                            <h1 class="bg-[#3A54B4] text-white rounded-lg p-4">{{message.text}}</h1>
                            <p class="text-left text-[#959595]">{{message.time}}</p>
                        </div>
                        <div class="px-4">
                            <img class="rounded-full -mt-5" src="@/assets/images/divers/profile5.svg" :alt="selectedProfile.profileImage">
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full p-4 flex">
                <div class="w-full">
                    <input class="border-l-2 outline-none border-t-2 border-b-2 rounded-tl-lg rounded-bl-lg p-4 w-full" type="text" placeholder="Write your message here..">
                </div>
                <div class="flex space-x-3 items-center border-r-2 border-t-2 border-b-2 px-6 rounded-tr-lg rounded-br-lg">
                    <div>
                        <button class="bg-[#3A54B4] p-2 px-4 rounded-lg text-white">Send</button>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const components = {
    RouterLink
};
const showUserProfile = ref(false);
const selectedProfile = ref(null);
const toggleUserProfile = (profile) => {
    showUserProfile.value = true;
    selectedProfile.value = profile;
}

const menu = ref([
{
  profileImage: import('@/assets/images/divers/profile2.svg').then((module) => module.default),
  name: 'Jaxson Stanton',
  message:'Received 15 min ago.',
  sender: {
    headerMessage: 'Order not received even 3 days on the estimated delivery date.',
    headerDis: 'Received 15 min ago.',
  },
  messages: [
    {
      id: 1,
      text: 'Order not received even 3 days on the estimated delivery date.',
      time: '3:30 pm',
      sender: true,
    },
    {
      id: 2,
      text: 'Hi Jaxson! hope you are doing well. I will be to happy you',
      time: '3:30 pm',
      sender: false,
    },
    {
      id: 3,
      text: 'Can You please help me to confirm my delivery confirmation',
      time: '3:30 pm',
      sender: true,
    },
    {
      id: 4,
      text: 'Yeah Sure! Please verify you phone number',
      time: '3:30 pm',
      sender: false,
    },
    {
      id: 5,
      text: 'Yeah sure! +1 20515112 this is my phone number',
      time: '3:30 pm',
      sender: true,
    },
    {
      id: 6,
      text: 'Thank You! give me a moment to verify and get back to you',
      time: '3:30 pm',
      sender: false,
    },
  ],
},
{
  profileImage: import('@/assets/images/divers/profile6.svg').then((module) => module.default),
  name: 'John Doe',
  message:'Received 30 min ago.',
  sender: {
    headerMessage: 'Hi',
    headerDis: 'Received 30 min ago.',
  },
  messages: [
    {
      id: 1,
      text: 'Hi',
      time: '00:30 pm',
      sender: true,
    },
    {
      id: 2,
      text: 'Hello John Doe! how may I help you',
      time: '00:30 pm',
      sender: false,
    },
    {
      id: 3,
      text: 'I need help your about my delivery confirmation',
      time: '00:30 pm',
      sender: true,
    },
    {
      id: 4,
      text: 'Please verify you phone number',
      time: '3:30 pm',
      sender: false,
    },
    {
      id: 5,
      text: 'Yeah Sure, +5 4112511221',
      time: '00:30 pm',
      sender: true,
    },
    {
      id: 6,
      text: 'Thank You! give me a moment to verify and get back to you',
      time: '00:30 pm',
      sender: false,
    },
  ],
},
{
  profileImage: import('@/assets/images/divers/profile8.svg').then((module) => module.default),
  name: 'Thomas',
  message:'Received 02 min ago.',
  sender: {
    headerMessage: 'Hi',
    headerDis: 'Received 02 min ago.',
  },
  messages: [
    {
      id: 1,
      text: 'Hi',
      time: '00:30 pm',
      sender: true,
    },
    {
      id: 2,
      text: 'Hello Thomas!',
      time: '00:30 pm',
      sender: false,
    },
    {
      id: 3,
      text: 'Can you help me Please',
      time: '00:30 pm',
      sender: true,
    },
    {
      id: 4,
      text: 'Sur, how may I help you',
      time: '3:30 pm',
      sender: false,
    },
    {
      id: 5,
      text: 'Delivery confirmation',
      time: '00:30 pm',
      sender: true,
    },
    {
      id: 6,
      text: 'Please send me you verify phone number',
      time: '00:30 pm',
      sender: false,
    },
    {
      id: 7,
      text: 'Yeah sure, 6204245125',
      time: '00:30 pm',
      sender: true,
    },
    // {
    //   id: 6,
    //   text: 'Thank You! give me a moment to verify and get back to you',
    //   time: '00:30 pm',
    //   sender: false,
    // },
  ],
},
{
  profileImage: import('@/assets/images/divers/profile4.svg').then((module) => module.default),
  name: 'William',
  message:'Received 01 min ago.',
  sender: {
    headerMessage: 'Hi',
    headerDis: 'Received 01 min ago.',
  },
  messages: [
    {
      id: 1,
      text: 'Hi',
      time: '00:30 pm',
      sender: true,
    },
    {
      id: 2,
      text: 'Hello William! how may I help you',
      time: '00:30 pm',
      sender: false,
    },
    {
      id: 3,
      text: 'I need help your about my delivery confirmation',
      time: '00:30 pm',
      sender: true,
    },
    {
      id: 4,
      text: 'Please verify you phone number',
      time: '3:30 pm',
      sender: false,
    },
    {
      id: 5,
      text: 'Yeah Sure, +5 4112511221',
      time: '00:30 pm',
      sender: true,
    },
    {
      id: 6,
      text: 'Thank You! give me a moment to verify and get back to you',
      time: '00:30 pm',
      sender: false,
    },
  ],
},
]);

onMounted(async () => {
    menu.value = await Promise.all(menu.value.map(async (item) => ({
        ...item,
        profileImage: await item.profileImage
    })));
});
</script>
