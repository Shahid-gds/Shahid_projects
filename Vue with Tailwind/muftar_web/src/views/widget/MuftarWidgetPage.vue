<template>
  <WidgetHader />
  <div class="container mx-auto p-6">
    <div class="flex flex-col mt-10 xl:mx-40">
      <div class="w-full h-auto sm:mt-20 p-6">
        <div class="md:mx-10 flex mt-10">
          <div class="text-black bg-[#e8e8e8] cursor-pointer font-semibold text-center p-2 w-1/2 rounded-l-2xl"
            :class="{ 'active': isActiveDot }" @click="toggleActiveDot">
            <h1>DOT</h1>
          </div>
          <div class="text-black text-center bg-[#e8e8e8] cursor-pointer font-semibold p-2 w-1/2 rounded-r-2xl"
            :class="{ 'active': isActiveMc }" @click="toggleActiveMc">
            <h1>MC</h1>
          </div>
        </div>
        <div class="flex mt-12 md:mx-10">
          <div class="w-full" :class="{ 'activePlace': isActiveDot }">
            <input class="p-2 px-4 w-full border-2 rounded-2xl placeholder-bold" type="text"
              :placeholder="isActiveDot ? 'Input DOT Number' : 'Input MC Number'" />
          </div>
        </div>
        <div class="mt-12 md:mx-10 bg-[#475da6] p-2 text-center text-[white] rounded-2xl">
          <h1 class="text-xl font-semibold">LOOKUP</h1>
        </div>
        <div class="xl:mx-40 md:mx-40 sm:mt-40 mt-20">
          <p class="text-[#707070] text-md font-[400] uppercase text-center">
            By submiting your information to us. you authorize us to communicate with you
            electronically or otherwise. including by email and/or text messages. your
            provider’s message and data rates may apply.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/css/index.css'
import WidgetHader from '../../views/widget/WidgetHeader.vue'
import { ref } from 'vue'
export default {
  components: { WidgetHader },
  data() {
    return {
      isActiveDot: true,
      isActiveMc: false
    }
  },
  methods: {
    toggleActiveDot() {
      this.isActiveDot = true,
        this.isActiveMc = false
    },
    toggleActiveMc() {
      this.isActiveDot = false,
        this.isActiveMc = true
    }
  },


}

</script>

<style scoped>
.active {
  background: #475da6;
  color: white;
}
.placeholder-bold::placeholder {
  font-weight: bold;
}
</style>
