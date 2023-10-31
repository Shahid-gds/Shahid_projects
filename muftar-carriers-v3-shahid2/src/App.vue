<template>
  <div id="app" class="flex flex-col h-screen ">
  
    <!-- <orbit-spinner v-if="showLoadingScreen" :animation-duration="1000" :size="55" color="#ff1d5e" /> -->
    <!-- <Loader v-if="showLoadingScreen" /> -->
    <!-- <notifications position="bottom right" classes="bg-primary text-red-500 text-center" /> -->
    <!-- <router-view v-else></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
// import { OrbitSpinner } from 'epic-spinners'

// const showLoadingScreen = ref(true);

// const runLoading = () => {
//   setTimeout(() => {
//     showLoadingScreen.value = false
//   }, 2000)
// }

// runLoading();


</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

* {
  padding: 0;
  margin: 0;
}

html,
body {
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Roboto', sans-serif;
}

// #app {
//   font-family: 'Avenir';
// }

.router-link-active {
  color: white !important;
}

.vue-notifyjs.notifications {
  .alert {
    z-index: 10000;
  }

  .list-move {
    transition: transform 0.3s, opacity 0.4s;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .list-enter-active {
    transition: transform 0.2s ease-in, opacity 0.4s ease-in;
  }

  .list-leave-active {
    transition: transform 1s ease-out, opacity 0.4s ease-out;
  }

  .list-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .list-leave-to {
    opacity: 0;
    transform: scale(1.2, 0.7);
  }
}

:root {
  --primary: #304276
}

.bg-theme {
  background-color: var(--primary);
}

.heading_color {
  color: #3D5AA9
}

.bg_color {
  background-color: #3D5AA9;
  color: white
}

.button_gradient {
  background: linear-gradient(to bottom, #3D5AA9, #253E82);
}


</style>
