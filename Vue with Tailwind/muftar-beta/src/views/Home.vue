<template>
   <Header @toggleModal="toggleModal"/>
   <WaitlistModal v-if="modalOpen" @toggleModal="toggleModal" :modalOpen="modalOpen" />
   <transition>
    <div class="container mx-auto mt-10 flex flex-col-reverse lg:flex-row">
        <div>
            <h1 class="p-6 md:text-4xl font-bold">Powerful & Paperless, Yet Simple</h1>
        <p class="p-6 md:text-xl md:w-3/4">Speed up your business processes and make sure your business operations are running smoothly.</p>
        <div class="p-6">
            <img src="../assets/images/process.svg" alt="">
        </div>
        <div class="p-6">
            <p>Stay informed when new updates are released.</p>
            <input class="border-[#6668] border-2 md:w-1/2 w-3/4 rounded p-2 px-6 mt-6" type="email">
            <button class="bg-[#3C58A8] p-2 px-4 rounded text-white absolute mx-6 mt-6">Join</button>
        </div>
        </div>
        <div class="p-6">
            <video class="hero-video rounded-xl lg:ml-16 xl:max-w-2xl" autoplay muted controls loop playsinline>
                <source src="https://firebasestorage.googleapis.com/v0/b/muftar-site.appspot.com/o/site-assets%2Fvideos%2FMuftar-explained.webm?alt=media&token=b496b0db-e448-4422-8457-dafffe1a02a9" type="video/webm">
                <source src="https://firebasestorage.googleapis.com/v0/b/muftar-site.appspot.com/o/site-assets%2Fvideos%2FMuftar-explained.mp4?alt=media&token=7f20a906-d023-43f9-9f97-2c3ae121a51e" type="video/mp4">
                Your browser does not support the video tag.
              </video>
        </div>
   </div>
   </transition>
   <Footer class="mt-16"/>
</template>

<script setup>
import { ref } from 'vue';
import Header from './beta/Header.vue';
import Footer from './beta/Footer.vue'
import WaitlistModal from './beta/WaitlistModal.vue';
const modalOpen = ref(false)
const toggleModal = (x) =>{
    modalOpen.value = x
}
</script>