<template>
  <div id="BoLGenerator">
    <router-link class=" logo-brand flex mx-auto items-center justify-center text-white text-2xl py-3"
      :to="{ name: 'About' }">
      <img src="@/assets/logo-qr.svg" />
    </router-link>
    <section class="bol-paper">

      <div class="flex justify-between">
        <button @click="generatePDF"
          class="flex items-center bg-blue-400 text-white font-bold py-2 px-3 rounded text-xl">
          <img src="@/assets/icons/bol-generator/printing.svg" class="w-6 mr-4" /> Generate
        </button>

        <div class="flex space-x-2">
          <button class="bg-blue-300 py-2 px-3 rounded" @click="toggleBolPage = false"
            :class="{ 'bg-blue-700 text-white': !toggleBolPage }">Information</button>
          <button class="bg-blue-300 py-2 px-3 rounded" @click="toggleBolPage = true"
            :class="{ 'bg-blue-700 text-white': toggleBolPage }">Preview</button>
        </div>
        <div>
          <!-- <button class="bg-green-500 text-white py-2 px-4 rounded" v-if="!takePDF" @click="toggleBolPage = false">Edit</button> -->
          <button class="bg-red-500 text-white py-2 px-4 rounded" v-if="!processing"
            @click="resetLocalData()">Reset</button>
          <div v-else><em>Please wait...</em> </div>
        </div>
      </div>
      <div class="my-10" v-if="!processing">
        <BolEntry v-if="!toggleBolPage" @saveBol="saveBol" :bol_gen="bol_gen" />
        <BolIndex :editMode="editMode" v-else />
      </div>
      <div class="" v-else>
        <img class="w-1/2 mx-auto" src="@/assets/gif/truck-loading-animation.gif" />
      </div>
      <vue3-html2pdf :show-layout="false" :float-layout="true" :enable-download="true" :preview-modal="true"
        :paginate-elements-by-height="1400" filename="bol-by-rapid" :pdf-quality="2" :manual-pagination="false"
        pdf-format="a4" pdf-orientation="portrait" pdf-content-width="100%" ref="html2Pdf">
        <template v-slot:pdf-content>
          <BolIndex :takePDF="takePDF" />
        </template>
      </vue3-html2pdf>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import BolIndex from '@/components/bol-generator/BolIndex.vue'
import BolEntry from '@/components/bol-generator/BolEntry.vue'
import Vue3Html2pdf from "vue3-html2pdf";

export default {
  components: {
    Vue3Html2pdf,
    BolIndex,
    BolEntry
  },
  data() {
    return {
      takePDF: false,
      editMode: false,
      toggleBolPage: false,
      processing: false,
      bol_gen: {
        vendor: {
          name: 'Camerican International Inc.',
          email: 'test@email.com',
          address: {
            location_name: '',
            line1: '45 Eisenhower Dr',
            line2: '',
            city: 'Atlant Paramus',
            state: 'NJ',
            country: 'USA',
            zip: '07652-1416'
          },
        },
        order: {
          carrier: { name: 'CMDU TRION OTSBNE1MA' },
          location: 'L737 Garden City Tier 50-53 61-62',
          port: 'Savannah, GA',
          awb_no: 'CMDUHKU0117475',
          arrive_date: '05/11/2022',
          issued_by: 'Everest Transportation Systems',
          entry_no: '9F9-0001553-6',
          customer_ref: 'T3162',
          stock_info: [
            {
              pkgs: 0,
              description: 'Frozen Tilapia fillets.\n Size 3-5oz\n Packing: 18*1LB/CTN\n Production Date: 03/13/2022\n SI#:T3162\n Item# C57642 \n Plant Name And Address: Hainan Jiadezin Foodsstuff oc., LTD\n No. 10 Qiongshan Avenue meilan area \n haikou city, hainan, china, plant no.: 4600/02027\n FDA No.: 12659021204',
              weight: 0,
            }
          ],
          shipto: {
            location_name: 'Americold Atlanta Westgate',
            address: {
              line1: '1740 Westgate Parkway SW',
              line2: '',
              city: 'Atlanta',
              state: 'GA',
              country: 'USA',
              zip: '30336'
            },
          }
        },
        ship_to: {
          name: '',
          address: {
            line1: '',
            line2: '',
            city: '',
            state: '',
            zip: '',
            country: ''
          }
        },
        reciever: {
          id: '',
          name: '',

        },
        carrier: {
          id: '',
          name: 'Muftar Transport LLC',
          address: {
            line1: '123 Main Street',
            line2: '',
            city: 'Anytown',
            state: 'ST',
            country: 'USA',
            zip: '30005'
          },
          mc_number: '1234567890',
          phone: '(770) 555-5555',
          fax: '(770) 555-5555',
          email: 'test@email.com',
          attn: 'Amel',
          reference: 'Grand Digitals',
          trailer: 'Tesla',
          driver: {
            name: 'Josh Buggin',
            phone: '(678) 555-0000',
            truck: 'Tesla Semi 18'
          }
        },
        broker: {
          id: '',
          logo: 'https://firebasestorage.googleapis.com/v0/b/muftar-digital-trucking.appspot.com/o/brokers%2Fbest-deal.png?alt=media&token=61c33af8-f9a3-4d89-a961-7d5937c2d4b8',
          name: 'Best Deal Brokers',
          address: {
            line1: '123 Main Street',
            line2: '',
            city: 'Anytown',
            state: 'ST',
            country: 'USA',
            zip: '30005'
          },
          mc_number: '1234567890',
          phone: '(770) 555-5555',
          fax: '(770) 555-5555',
          email: 'test@email.com'
        },
        load: {
          id: '',
          confirmation_number: 'mobile-test1',
          created: 1656351917,
          stats: {
            pieces: 1888,
            miles: 260,
            spaces: 40,
            pallets: 0,
            act_wgt: 42000,
            as_wgt: 42000,
            load_type: 'Drayage',
            trailer: '40\' IMDL Container',
            table: [
              { pay_code: 'Load', pay_type: 'Flat', rate: 2300, total: 2300 },
              { pay_code: 'Overweight', pay_type: '', rate: 100, total: 100 },
              { pay_code: 'Detention', pay_type: '', rate: 150, total: 150 },
            ],
          },
          locations: [
            {
              stop_idx: 1,
              stop_kind: 'pickup',
              start_date: '6/12/2022',
              end_date: '6/12/2022',
              name: 'Best Deal Brokers',
              address: {
                line1: '123 Main Street',
                line2: '',
                city: 'Anytown',
                state: 'ST',
                country: 'USA',
                zip: '30005'
              },
              ref_contact: '',
              appt_ref: 'no',
              notes: 'Reefer\nContainer\nSeal\nSSL-CMD\nETA 6/15'
            },
            {
              stop_idx: 2,
              stop_kind: 'dropoff',
              start_date: '6/12/2022',
              end_date: '6/12/2022',
              name: 'Best Deal Brokers',
              address: {
                line1: '123 Main Street',
                line2: '',
                city: 'Anytown',
                state: 'ST',
                country: 'USA',
                zip: '30005'
              },
              ref_contact: '',
              appt_ref: 'no',
              notes: 'Reefer\nContainer\nSeal\nSSL-CMD\nETA 6/15'
            }
          ],
          commodity: [
            { item: 'Frozen Foods', description: 'Frozen Tilapia', pieces: 1863, spaces: 40, weight: 42000 }
          ]
        }
      }
    }
  },
  methods: {
    ...mapMutations(['SET_BOLGENERATOR']),
    initBol() {
      if (window.localStorage.getItem('boldata') != null || window.localStorage.getItem('boldata') != undefined) {
        console.log('its here')
      }
      else {
        console.log('its now been added')
        this.SET_BOLGENERATOR(this.bol_gen)
      }
    },
    resetLocalData() {
      this.processing = true
      window.localStorage.removeItem('boldata')
      setTimeout(() => {
        location.reload()
      }, 500);
    },
    saveBol(bol) {
      this.boldata = bol
      console.log('saving now', bol)
      this.SET_BOLGENERATOR(bol)
    },
    generatePDF() {
      this.takePDF = true
      // console.log(this.$refs)
      this.$refs.html2Pdf.generatePdf();
    },
  },
  computed: {
    ...mapState(['boldata'])
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
