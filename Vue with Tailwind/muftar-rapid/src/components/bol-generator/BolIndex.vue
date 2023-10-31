<template>
  <div class="flex justify-between  mt-5">

  </div>
  <h1 class="ml-5 text-2xl font-bold">Delivery Order</h1>
  <section class="w-11/12 mx-auto">
    <BIVendor :vendor="boldata.vendor" :order="boldata.order" />
    <BolDescribedStock :stock="boldata.order.stock_info" />
    <!-- <BolDescribedClerk /> -->
  </section>

  <h1 class="ml-5 text-2xl font-bold">Dispatch Confirmation</h1>
  <section class="w-11/12 mx-auto">
    <!-- <BolBroker :broker="boldata.broker" :load_data="boldata.load"/> -->
    <BolLoadInfo :carrier="boldata.carrier" :load_data="boldata.load" />
    <BolLocations :load_data="boldata.load" />
    <!-- <BolCommodity :load_data="boldata.load" /> -->
  </section>

  <div class="html2pdf__page-break"></div>

  <hr class="my-5 border-gray-500 border-2 w-10/12 mx-auto" />
  <section class="w-11/12 mx-auto">
    <BolCommodity :load_data="boldata.load" />
    <BolSignatures :takePDF="takePDF" />
  </section>

  <div v-if="!takePDF" class=" flex justify-center item-center">
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
import BIVendor from '@/components/bol-generator/bolindex/delivery-order/BIVendor.vue'
import BolDescribedStock from '@/components/bol-generator/bolindex/delivery-order/BolDescribedStock.vue'
// import BolDescribedClerk from '@/components/bol-generator/bolindex/delivery-order/BolDescribedClerk.vue'

//Rate Confirmation
// import BolBroker from '@/components/bol-generator/bolindex/main/BolBroker.vue'
import BolLoadInfo from '@/components/bol-generator/bolindex/main/BolLoadInfo.vue'
import BolLocations from '@/components/bol-generator/bolindex/main/BolLocations.vue'
import BolCommodity from '@/components/bol-generator/bolindex/main/BolCommodity.vue'
//Signing Page
import BolSignatures from '@/components/bol-generator/bolindex/closing/BolSignatures.vue'

export default {
  components: {
    BIVendor,
    BolDescribedStock,
    // BolDescribedClerk,

    // BolBroker,
    BolLoadInfo,
    BolLocations,
    BolCommodity,

    BolSignatures

  },
  computed: {
    ...mapState(['boldata'])
  },
  props: ['editMode', 'takePDF'],
  data() {
    return {
      bol_data: {
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
          },
          stock_info: [
            {
              pkgs: 0,
              description: 'Frozen Tilapia',
              weight: 0,
            }
          ],
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
          reference: '',
          trailer: '',
          driver: {
            name: 'Josh Buggin',
            phone: '(678) 555-0000',
            truck: 'Tesla Semi 18'
          }
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
    this.boldata = this.bol_data
  }
}
</script>
<style scoped>

</style>
