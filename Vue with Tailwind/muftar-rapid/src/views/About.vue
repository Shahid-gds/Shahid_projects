<template>
  <div id="About">
    <router-link class="logo-brand flex mx-auto items-center justify-center text-white text-2xl py-3"
      :to="{ name: 'About' }">
      <img src="@/assets/logo-long.svg" />
    </router-link>

    <div class="bol-paper">
      <div class="h-full flex flex-col justify-center items-center">

        <h1 class="text-3xl md:text-5xl text-center w-10/12 mb-24">Welcome to Muftar Corp's Rapid BOL</h1>

        <p class="text-sm md:text-xl text-gray-500 text-center w-9/12 mx-auto mb-10">This service is the latest edition
          to <span class="font-bold text-black">Muftar Corp's</span> technology to rapid conduct and and streamline
          transportation. Go to
          <a class="font-bold text-blue-700">muftar.com</a> for more information.
        </p>

        <div class="flex flex-col">
          <a href="/verify" class="no-underline enter-btn bg-blue-400 text-center text-white">Try it out</a>
          <a href="/load-generator" class="no-underline enter-btn my-3 bg-blue-400 text-center text-white">Create a
            Load</a>
        </div>

        <a href="https://muftar.com" class="mt-10 text-blue-400">Learn More</a>
        <div class=" py-2">
          <span class="text-gray-600">or</span>
        </div>
        <a href="/explorer" class=" text-blue-400">Go to load board</a>
        <p class="text-center text-gray-400">{{ version }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'About',
  computed: {
    ...mapState(['load_data', 'version'])
  },
}
</script>
<style scoped>
#About {
  background-color: var(--primary);
  min-height: 100vh;
  /* max-width: 900px;
    margin: 0 auto ; */
}

.bol-paper {
  width: 96%;
  min-height: 80vh;
  padding: 2rem;
  padding-top: 1rem;
  margin: auto;
  background-color: #fff;
  border-radius: 15px 15px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.code-insert {
  width: 6rem;
  height: 6rem;
  margin: 0 .5rem;
}

.enter-btn {
  font-size: 1.6rem;
  padding: 1rem 5rem;
  border-radius: 10px;
}

.logo-brand {
  text-decoration: none;
}

.logo-brand img {
  width: 35%;
  max-width: 320px;
}

.secret-dot {
  background-color: #ddd;
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
}

@media only screen and (min-width: 900px) {
  .code-insert {
    width: 12rem;
    height: 12rem;
    margin: 0 1rem;
  }

  .enter-btn {
    font-size: 2.5rem;
    padding: 1rem 5rem;
    border-radius: 10px;
  }
}
</style>
