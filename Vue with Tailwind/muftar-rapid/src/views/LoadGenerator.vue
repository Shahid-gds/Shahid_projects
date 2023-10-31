<template>
  <div id="BoLGenerator">
    <router-link class=" logo-brand flex mx-auto items-center justify-center text-white text-2xl py-3"
      :to="{ name: 'About' }">
      <img src="@/assets/logo-long.svg" />
    </router-link>
    <section class="bol-paper">

      <!-- <div class="flex justify-between">
      <button @click="generatePDF()" class="flex items-center bg-blue-400 text-white font-bold py-2 px-3 rounded text-xl">
        <img src="@/assets/icons/bol-generator/printing.svg" class="w-6 mr-4"/> Generate
      </button>

      <div class="flex">
        <button class="bg-blue-300 py-2 px-3 rounded" @click="toggleBolPage = false"
        :class="{'bg-blue-700 text-white': !toggleBolPage}">Information</button>
        <button class="bg-blue-300 py-2 px-3 rounded" @click="toggleBolPage = true"
          :class="{'bg-blue-700 text-white': toggleBolPage}">Preview</button>
      </div>
      <div>
        <button class="bg-green-500 text-white py-2 px-4 rounded" v-if="!takePDF" @click="toggleBolPage = false">Edit</button>
        <button class="bg-red-500 text-white py-2 px-4 rounded" v-if="!processing" @click="resetLocalData()">Reset</button>
        <div v-else><em>Please wait...</em> </div>
      </div>
    </div> -->
      <div class="my-10" v-if="!processing">
        <div class="flex items-center">
          <h1 class="font-bold text-3xl">Load Generator</h1>
          <p class="text-gray-400 italic ml-4">{{ version }}</p>
        </div>

        <BolEntry v-if="!toggleBolPage" @saveBol="saveBol" />
        <!-- <BolIndex :editMode="editMode" v-else /> -->
      </div>
      <div class="" v-else>
        <img class="w-1/2 mx-auto" src="@/assets/gif/truck-loading-animation.gif" />
      </div>
      <vue3-html2pdf v-if="takePDF" :show-layout="false" :float-layout="true" :enable-download="true"
        :preview-modal="true" :paginate-elements-by-height="1400" filename="bol-by-rapid" :pdf-quality="2"
        :manual-pagination="false" pdf-format="a4" pdf-orientation="portrait" pdf-content-width="100%" ref="html2Pdf">
        <template v-slot:pdf-content>
          <BolIndex />
        </template>
      </vue3-html2pdf>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import load_json from '@/assets/json/load.json'
// import BolIndex from '@/components/load-generator/BolIndex.vue'
import BolEntry from '@/components/load-generator/BolEntry.vue'
import Vue3Html2pdf from "vue3-html2pdf";

export default {
  components: {
    Vue3Html2pdf,
    // BolIndex,
    BolEntry
  },
  data() {
    return {
      takePDF: false,
      editMode: false,
      toggleBolPage: false,
      processing: false,
      bol_gen: load_json
    }
  },
  methods: {
    ...mapMutations(['SET_LOADGENERATOR']),
    initBol() {
      if (window.localStorage.getItem('load_data') != null || window.localStorage.getItem('load_data') != undefined) {
        console.log('its here')
      }
      else {
        console.log('its now been added')
        this.SET_LOADGENERATOR(this.bol_gen)
      }
    },
    resetLocalData() {
      this.processing = true
      window.localStorage.removeItem('load_data')
      setTimeout(() => {
        location.reload()
      }, 500);
    },
    saveBol(bol) {
      this.load_data = bol
      console.log('saving now', bol)
      this.SET_LOADGENERATOR(bol)
    },
    generatePDF() {
      this.takePDF = true
      // console.log(this.$refs)
      this.$refs.html2Pdf.generatePdf();
    },
  },
  computed: {
    ...mapState(['load_data', 'version'])
  },
  created() {
    this.initBol()
  }
}
</script>
<style>
#BoLGenerator {
  background-color: var(--primary);
  min-height: 100vh;
  padding-bottom: 4rem;
  /* max-width: 900px;
    margin: 0 auto ; */
}

.logo-brand {
  text-decoration: none;
}

.logo-brand img {
  width: 35%;
  max-width: 320px;
}

.bol-paper {
  width: 96%;
  min-height: 90vh;
  max-width: 900px;
  padding: 2rem;
  padding-top: 1rem;
  margin: auto;
  background-color: #fff;
  border-radius: 15px;
}
</style>
