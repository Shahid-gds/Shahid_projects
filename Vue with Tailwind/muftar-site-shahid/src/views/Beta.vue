<template>
  <div class=""> 
    <Header @toggleModal="toggleModal" />
    <Teleport to="body">
      <WaitlistModal v-if="modalOpen" @toggleModal="toggleModal" :modalOpen="modalOpen" />
    </Teleport>
    <section id="hero">

      <div class="container flex flex-col-reverse lg:flex-row items-center px-6 mx-auto mt-10 space-y-0 lg:space-y-0">
        <!-- <XyzTransition appear xyz="fade short-100% ease"> -->
        <div class="flex flex-col mb-32 space-y-12 lg:w-full mt-12">
          <h2 class="w-full lg:w-9/12 text-2xl text-black lg:text-3xl font-bold">Powerful & Paperless, Yet Simple</h2>
          <p class="w-full lg:w-9/12 text-xl text-black xyz-nested">Speed up your business processes and make sure your
            business operations are running smoothly.</p>
          <div class="xyz-nested" xyz="fade down-5 small-75% delay-2.5 duration-2">
            <img src="@/assets/icons/beta/process.svg" alt="">
          </div>
          <div>
            <p class="xyz-nested" xyz="fade fade left-5 delay-5 duration-5 sease-out-back">Stay informed when new updates
              are released.</p>
            <div class="w-full lg:inline-block xyz-nested" xyz="fade fade left-5 delay-5 duration-5 sease-out-back">
              <input class="border-[#666668] border-2 rounded p-2 px-6 w-8/12 lg:w-60 xl:w-80 mt-5" type="email"
                placeholder="Enter Your Email" v-model="email">
              <button v-if="!processing" class="space-x-6 bg-indigo-200 p-2.5 px-4 ml-4 rounded text-white absolute mt-5"
                @click="submitEmailNewsletter()">Join</button>
              <button v-else-if="processing"
                class="space-x-6 bg-gray-500 p-2.5 px-4 ml-4 rounded text-white absolute mt-5 disabled cursor-not-allowed italic">Please
                wait...</button>
            </div>
            <p>{{ response.feedback }}</p>
          </div>
        </div>

        <!-- </XyzTransition> -->
        <div>
          <XyzTransition appear xyz="fade short-100% ease">
            <video class="hero-video rounded-xl lg:ml-16 xl:max-w-2xl" autoplay muted controls loop playsinline>
              <source
                src="https://firebasestorage.googleapis.com/v0/b/muftar-site.appspot.com/o/site-assets%2Fvideos%2FMuftar-explained.webm?alt=media&token=b496b0db-e448-4422-8457-dafffe1a02a9"
                type="video/webm">
              <source
                src="https://firebasestorage.googleapis.com/v0/b/muftar-site.appspot.com/o/site-assets%2Fvideos%2FMuftar-explained.mp4?alt=media&token=7f20a906-d023-43f9-9f97-2c3ae121a51e"
                type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </XyzTransition>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
<script setup>
import { ref, onMounted} from 'vue'
import axios from 'axios'
import Header from "@/views/beta/Header.vue"
import Footer from "@/views/beta/Footer.vue"
import WaitlistModal from '@/views/beta/WaitlistModal.vue'

const email = ref('')
const response = ref({ status: '', feedback: '' })
const processing = ref(false)
const modalOpen = ref(false)


const toggleModal = (x) => {
  console.log(x)
  modalOpen.value = x
}
const submitEmailNewsletter = async () => {
  if (email.value) {
    try {
      processing.value = true
      const payload = {
        email: email.value,
      }
      const res = await axios.post('https://muftardigital.pythonanywhere.com/site/newsletter', payload)
      response.value = res.data
      processing.value = false
    } catch (error) {
      processing.value = false
      response.value = {
        status: 'error',
        feedback: 'An error occurred. Please try again later.',
      }
    }
  } else {
    processing.value = false
    response.value = {
      status: 'error',
      feedback: 'Please enter a valid email address.',
    }
  }
}

const visitor = async () => {
  try {

      const res = await axios.get('https://muftardigital.pythonanywhere.com/site/visit')
      response.value = res.data
      console.log(response.value)
    } catch (error) {
        console.log(error)
    }
}
onMounted(() =>{
  visitor()
})
</script>

<style scoped></style>
  
