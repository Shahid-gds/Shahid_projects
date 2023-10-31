<template>
  <!-- v-bind:style="{ top: modalTop + 'px' }" -->
  <div class="SignatureModal">
    <div class="modal-overlay" @click="hideModal()"></div>
    <div class="modal-body">
      <h3>Request Signature from</h3>
      <DefaultDropdown @setOption="setOption" :options="options" />
        <SignaturePad/>
      <div class="flex border w-1/2 justify-between mt-4">
        <input type="email" placeholder="sample@exmaple.com" v-model="email" />
        <button class="bg-blue-400 text-white p-2 rounded">
          Submit for Signature
        </button>
      </div>
      <section  class="my-10 " v-if="tab == 0 ">
        <h1 class="text-2xl font-bold">Signature goes here</h1>
        <SignaturePad/>


        <button class="bg-blue-400 text-white p-2 rounded mt-5">Confirm Signature</button>
      </section>
      <section v-else-if="tab == 1">
        <DefaultDropdown @setOption="setOption" :options="options"/>
        <div class="flex border w-1/2 justify-between mt-4">
          <input type="email" placeholder="sample@exmaple.com" v-model="email" />
          <button class="bg-blue-400 text-white p-2 rounded">Submit for Signature</button>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import DefaultDropdown from "@/components/snippets/DefaultDropdown.vue";
import SignaturePad from './SignaturePad.vue'
export default {
  components: {
    DefaultDropdown,
    SignaturePad
  },
  name: "SignatureModal",
  data() {
    return {
      selected_option: "",
      email: "",
      options: ["Facility", "Agent", "Driver"],
      modalTop: 0,
    };
  },
  mounted() {
    // let element = document.getElementById("QRCode");
    // let vhToPixel = (24 * 720) / 100;
    // let modalPositionTop = parseInt(element.scrollHeight) - vhToPixel;
    // this.modalTop = modalPositionTop;
  },
  methods: {
    setOption(val) {
      this.selected_option = val;
    },
    hideModal() {
      this.$emit("hideModal", false);
    },
  },
};
</script>
<style scoped>
#SignatureModal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 50;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: 1s;
}
.modal-overlay {
  position: fixed;
  z-index: 51;
  top: 0;
  left: 0;
  background-color: #222;
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: 0.7;
}
.modal-body {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  width: 80%;
  min-height: 20vh;
  margin: auto;
  border-radius: 12px;
  background-color: #fff;
  z-index: 52;
  overflow: auto;
  transition: 1s;
}
</style>
