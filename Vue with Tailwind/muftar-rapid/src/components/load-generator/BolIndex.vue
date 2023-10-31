<template>
  <div class="flex justify-between  mt-5">

  </div>
  <h1 class="ml-5 text-2xl font-bold">Delivery Order</h1>
  <section class="w-11/12 mx-auto">
    <BIVendor :vendor="load_data.vendor" :order="load_data.order" />
    <BolDescribedStock />
    <!-- <BolDescribedClerk /> -->
  </section>

  <h1 class="ml-5 text-2xl font-bold">Dispatch Confirmation</h1>
  <section class="w-11/12 mx-auto">
    <!-- <BolBroker :broker="load_data.broker" :load_data="load_data.load"/> -->
    <BolLoadInfo :carrier="load_data.carrier" :load_data="load_data.load" />
    <BolLocations :load_data="load_data.load" />
    <BolCommodity :load_data="load_data.load" />
  </section>

  <hr class="my-5 border-gray-500 border-2 w-10/12 mx-auto" />
  <section class="w-11/12 mx-auto">
    <BolDisclaimer />
    <BolSignatures />
  </section>

  <div class=" flex justify-center item-center">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-1/3 mx-auto mt-4"
      @click.prevent="createLoad()">
      Submit to Muftar Rapid Load Board
    </button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import axios from 'axios'
// Delivery Order
import BIVendor from './bolindex/delivery-order/BIVendor.vue'
import BolDescribedStock from './bolindex/delivery-order/BolDescribedStock.vue'
// import BolDescribedClerk from './bolindex/delivery-order/BolDescribedClerk.vue'

//Rate Confirmation
// import BolBroker from './bolindex/main/BolBroker.vue'
import BolLoadInfo from './bolindex/main/BolLoadInfo.vue'
import BolLocations from './bolindex/main/BolLocations.vue'
import BolCommodity from './bolindex/main/BolCommodity.vue'
//Signing Page
import BolDisclaimer from './bolindex/closing/BolDisclaimer.vue'
import BolSignatures from './bolindex/closing/BolSignatures.vue'

export default {
  components: {
    BIVendor,
    BolDescribedStock,
    // BolDescribedClerk,

    // BolBroker,
    BolLoadInfo,
    BolLocations,
    BolCommodity,


    BolDisclaimer,
    BolSignatures

  },
  computed: {
    ...mapState(['load_data'])
  },
  props: ['editMode', 'takePDF'],
  data() {
    return {
    }
  },
  methods: {
    createLoad() {
      const config = {
        headers: {
          vendorID: 'pxl3NikroigQRypTbXTH'
        }
      }
      const payload = {
        options: {
          useBroker: true,
          brokerID: "pkKoWyBk8QbuhLd1Ryda"
        },
        load_data: this.bol_data
      }
      axios.post('https://muftardigital.pythonanywhere.com/vendor/loads/create', payload, config
      ).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created() {
    this.load_data = this.bol_data
  }
}
</script>
<style scoped>

</style>
